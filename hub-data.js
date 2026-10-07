/* Training Hub — shared data layer (Supabase-backed)
   Load order matters: config.js, then the Supabase CDN script, then this file.
   Expects window.SUPABASE_URL and window.SUPABASE_ANON_KEY from config.js.
   If either is blank, every call below becomes a safe no-op that warns in
   the console and returns an empty result — pages using this never crash,
   they just don't save anything until the backend's connected. */
(function () {
  var configured = !!(window.SUPABASE_URL && window.SUPABASE_ANON_KEY);
  var client = null;

  if (configured && window.supabase && window.supabase.createClient) {
    client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  } else {
    configured = false;
  }

  function warnNotConfigured() {
    console.warn('[Training Hub] Supabase is not connected yet — nothing will be saved. See README.md → "Connect the backend".');
  }

  window.HubData = {
    isConfigured: function () { return configured; },

    // ---- workout sessions ----
    logSession: async function (entry) {
      if (!configured) { warnNotConfigured(); return { error: 'not_configured' }; }
      return client.from('workout_sessions').insert([entry]);
    },
    getSessions: async function (tool) {
      if (!configured) { warnNotConfigured(); return []; }
      var res = await client.from('workout_sessions').select('*').eq('tool', tool).order('date', { ascending: false });
      if (res.error) { console.error(res.error); return []; }
      return res.data || [];
    },
    deleteSession: async function (id) {
      if (!configured) { warnNotConfigured(); return; }
      return client.from('workout_sessions').delete().eq('id', id);
    },

    // ---- personal records ----
    addPR: async function (entry) {
      if (!configured) { warnNotConfigured(); return { error: 'not_configured' }; }
      return client.from('personal_records').insert([entry]);
    },
    getPRs: async function (tool) {
      if (!configured) { warnNotConfigured(); return []; }
      var res = await client.from('personal_records').select('*').eq('tool', tool).order('date', { ascending: false });
      if (res.error) { console.error(res.error); return []; }
      return res.data || [];
    },
    deletePR: async function (id) {
      if (!configured) { warnNotConfigured(); return; }
      return client.from('personal_records').delete().eq('id', id);
    },

    // ---- budget ----
    getBudgetEntries: async function () {
      if (!configured) { warnNotConfigured(); return []; }
      var res = await client.from('budget_entries').select('*').order('date', { ascending: false });
      if (res.error) { console.error(res.error); return []; }
      return res.data || [];
    },
    addBudgetEntry: async function (entry) {
      if (!configured) { warnNotConfigured(); return { error: 'not_configured' }; }
      return client.from('budget_entries').insert([entry]);
    },
    updateBudgetEntry: async function (id, fields) {
      if (!configured) { warnNotConfigured(); return; }
      return client.from('budget_entries').update(fields).eq('id', id);
    },
    deleteBudgetEntry: async function (id) {
      if (!configured) { warnNotConfigured(); return; }
      return client.from('budget_entries').delete().eq('id', id);
    },

    // ---- budget v2: settings, goals, purchases, recurring ----
    getSetting: async function (key) {
      if (!configured) return null;
      var res = await client.from('budget_settings').select('value').eq('key', key).maybeSingle();
      return res.error || !res.data ? null : res.data.value;
    },
    setSetting: async function (key, value) {
      if (!configured) { warnNotConfigured(); return { error: 'not_configured' }; }
      return client.from('budget_settings').upsert({ key: key, value: value, updated_at: new Date().toISOString() });
    },
    getGoals: async function () {
      if (!configured) return [];
      var res = await client.from('budget_goals').select('*').order('created_at', { ascending: true });
      return res.error ? [] : (res.data || []);
    },
    addGoal: async function (g) { if (!configured) return { error: 'not_configured' }; return client.from('budget_goals').insert([g]); },
    updateGoal: async function (id, f) { if (!configured) return; return client.from('budget_goals').update(f).eq('id', id); },
    deleteGoal: async function (id) { if (!configured) return; return client.from('budget_goals').delete().eq('id', id); },
    getPurchases: async function () {
      if (!configured) return [];
      var res = await client.from('budget_purchases').select('*').order('created_at', { ascending: true });
      return res.error ? [] : (res.data || []);
    },
    addPurchase: async function (p) { if (!configured) return { error: 'not_configured' }; return client.from('budget_purchases').insert([p]); },
    updatePurchase: async function (id, f) { if (!configured) return; return client.from('budget_purchases').update(f).eq('id', id); },
    deletePurchase: async function (id) { if (!configured) return; return client.from('budget_purchases').delete().eq('id', id); },
    getRecurring: async function () {
      if (!configured) return [];
      var res = await client.from('budget_recurring').select('*').order('created_at', { ascending: true });
      return res.error ? [] : (res.data || []);
    },
    addRecurring: async function (r) { if (!configured) return { error: 'not_configured' }; return client.from('budget_recurring').insert([r]); },
    updateRecurring: async function (id, f) { if (!configured) return; return client.from('budget_recurring').update(f).eq('id', id); },
    deleteRecurring: async function (id) { if (!configured) return; return client.from('budget_recurring').delete().eq('id', id); },

    // Create the real entry for every recurring item that has come due (one per month, never twice).
    syncRecurring: async function () {
      if (!configured) return 0;
      var recs = (await this.getRecurring()).filter(function (r) { return r.active; });
      if (!recs.length) return 0;
      var today = new Date().toISOString().slice(0, 10), rows = [];
      recs.forEach(function (r) {
        var d = new Date(r.start_date + 'T00:00:00Z');
        var y = d.getUTCFullYear(), m = d.getUTCMonth();
        for (var guard = 0; guard < 120; guard++, m++) {
          if (m > 11) { m = 0; y++; }
          var last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
          var day = Math.min(r.day_of_month, last);
          var ds = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
          if (ds > today) break;
          if (ds < r.start_date) continue;
          if (r.end_date && ds > r.end_date) break;
          rows.push({ type: r.type, label: r.label, amount: r.amount, category: r.category, date: ds, recurring_id: r.id });
        }
      });
      if (!rows.length) return 0;
      var res = await client.from('budget_entries').upsert(rows, { onConflict: 'recurring_id,date', ignoreDuplicates: true });
      return res.error ? 0 : rows.length;
    },

    // One call the Dashboard (and Budget page) use: balance, goals, purchases, month figures.
    getBudgetSummary: async function () {
      if (!configured) return null;
      await this.syncRecurring();
      var all = await Promise.all([this.getBudgetEntries(), this.getSetting('balance_anchor'), this.getGoals(), this.getPurchases()]);
      return HubData.summarise(all[0], all[1], all[2], all[3]);
    },
    summarise: function (entries, anchor, goals, purchases) {
      anchor = anchor || { amount: 0, date: '1970-01-01' };
      var bal = Number(anchor.amount) || 0;
      entries.forEach(function (e) {
        if (e.date > anchor.date) bal += (e.type === 'income' ? 1 : -1) * Number(e.amount);
      });
      var now = new Date(), ym = now.toISOString().slice(0, 7);
      var mi = 0, mo = 0;
      entries.forEach(function (e) { if (e.date.slice(0, 7) === ym) { if (e.type === 'income') mi += Number(e.amount); else mo += Number(e.amount); } });
      var sum = function (st) { return purchases.filter(function (p) { return p.status === st; }).reduce(function (a, p) { return a + Number(p.amount); }, 0); };
      var primary = goals.filter(function (g) { return g.is_primary; })[0] || goals[0] || null;
      return { balance: bal, anchor: anchor, goals: goals, primary: primary, purchases: purchases,
               wanted: sum('wanted'), ordered: sum('ordered'), bought: sum('bought'),
               monthIncome: mi, monthOutgoing: mo, entries: entries };
    }
  };
})();
