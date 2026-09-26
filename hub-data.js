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
    }
  };
})();
