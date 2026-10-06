/* Training Hub — progress views.
   HubProgress.training(el, cfg)  — sessions + PRs for a training tool (reads the existing log, never changes it)
   HubProgress.budget(el, cfg)    — income / outgoings / goal overview from budget entries
   HubProgress.ui                 — small shared pieces (stat tiles, column chart, bars, sparkline)
   Styled only with --hub-* tokens from hub-core.js, so it follows whichever theme is active. */
(function () {
  'use strict';

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }

  var CSS = '' +
    '.hp{max-width:620px;margin:0 auto;padding:6px 0 90px;color:var(--hub-text,#f5f6ff);font-family:inherit}' +
    '.hp h3{margin:26px 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:var(--hub-muted,#9097c4)}' +
    '.hp .hp-sub{font-size:12px;color:var(--hub-faint,#6b72a3);margin:0 0 12px}' +
    '.hp-tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:14px}' +
    '.hp-tile{background:var(--hub-surface,#0e1021);border:1px solid var(--hub-line,#202549);border-radius:12px;padding:13px 14px;min-width:0}' +
    '.hp-tile .hp-l{font-size:11px;color:var(--hub-muted,#9097c4);margin-bottom:5px}' +
    '.hp-tile .hp-v{font-size:26px;font-weight:700;line-height:1.05;letter-spacing:-.01em;overflow-wrap:anywhere}' +
    '.hp-tile .hp-s{font-size:11px;color:var(--hub-faint,#6b72a3);margin-top:4px}' +
    '.hp-card{background:var(--hub-surface,#0e1021);border:1px solid var(--hub-line,#202549);border-radius:12px;padding:14px 14px 12px}' +
    '.hp-cols{position:relative;display:flex;align-items:flex-end;gap:6px;height:130px;padding:0 0 0 46px;margin-top:6px}' +
    '.hp-grid{position:absolute;left:46px;right:0;border-top:1px solid var(--hub-line,#202549);pointer-events:none}' +
    '.hp-gl{position:absolute;left:0;width:42px;text-align:right;font-size:10px;color:var(--hub-faint,#6b72a3);transform:translateY(-50%);pointer-events:none}' +
    '.hp-col{position:relative;flex:1;min-width:0;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;background:none;border:0;padding:0;cursor:pointer;color:inherit;-webkit-tap-highlight-color:transparent}' +
    '.hp-bar{width:100%;max-width:24px;min-height:0;background:var(--hub-accent,#8b93ff);border-radius:4px 4px 0 0}' +
    '.hp-col.neg .hp-bar{background:var(--hub-crit,#ff7087)}' +
    '.hp-col .hp-bv{font-size:10px;font-weight:700;color:var(--hub-text,#f5f6ff);margin-bottom:3px;white-space:nowrap}' +
    '.hp-col.dim .hp-bar{opacity:.55}' +
    '.hp-xl{display:flex;gap:6px;padding-left:46px;margin-top:6px}' +
    '.hp-xl span{flex:1;text-align:center;font-size:10px;color:var(--hub-faint,#6b72a3);min-width:0;white-space:nowrap;overflow:hidden;text-overflow:clip}' +
    '.hp-tip{min-height:18px;font-size:12px;color:var(--hub-muted,#9097c4);margin-top:8px}' +
    '.hp-hb{display:grid;grid-template-columns:96px 1fr auto;gap:10px;align-items:center;margin:9px 0}' +
    '.hp-hb .hp-n{font-size:12.5px;color:var(--hub-text,#f5f6ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.hp-hb .hp-tr{height:10px;background:var(--hub-surface2,#161a33);border-radius:5px;overflow:hidden}' +
    '.hp-hb .hp-f{height:100%;background:var(--hub-accent,#8b93ff);border-radius:0 4px 4px 0}' +
    '.hp-hb .hp-n2{font-size:12px;font-weight:700;color:var(--hub-text,#f5f6ff);min-width:30px;text-align:right}' +
    '.hp-pr{display:grid;grid-template-columns:1fr auto;gap:4px 12px;padding:12px 0;border-top:1px solid var(--hub-line,#202549)}' +
    '.hp-pr:first-child{border-top:0;padding-top:2px}' +
    '.hp-pr .hp-pn{font-size:14px;font-weight:600}' +
    '.hp-pr .hp-pv{font-size:18px;font-weight:700;text-align:right}' +
    '.hp-pr .hp-pm{font-size:11.5px;color:var(--hub-faint,#6b72a3)}' +
    '.hp-pr .hp-d{font-size:11.5px;text-align:right;font-weight:600;color:var(--hub-good,#4be3a1)}' +
    '.hp-pr .hp-d.dn{color:var(--hub-crit,#ff7087)}' +
    '.hp-pr .hp-d.eq{color:var(--hub-faint,#6b72a3)}' +
    '.hp-goal{grid-column:1/-1;margin-top:2px}' +
    '.hp-meter{height:8px;background:var(--hub-surface2,#161a33);border-radius:4px;overflow:hidden}' +
    '.hp-meter i{display:block;height:100%;background:var(--hub-accent,#8b93ff);border-radius:0 4px 4px 0}' +
    '.hp-goal .hp-gt{display:flex;justify-content:space-between;font-size:11.5px;color:var(--hub-muted,#9097c4);margin-bottom:5px}' +
    '.hp-empty{background:var(--hub-surface,#0e1021);border:1px dashed var(--hub-line2,#2e3566);border-radius:12px;padding:22px 18px;text-align:center;color:var(--hub-muted,#9097c4);font-size:13px;line-height:1.6}' +
    '.hp-empty button,.hp-btn{margin-top:12px;background:var(--hub-accent,#8b93ff);color:var(--hub-on-accent,#000);border:0;border-radius:10px;padding:11px 18px;font:700 13px inherit;cursor:pointer}' +
    '.hp-warn{background:var(--hub-surface,#0e1021);border:1px solid var(--hub-crit,#ff7087);border-radius:10px;padding:11px 13px;font-size:12.5px;color:var(--hub-muted,#9097c4);margin-top:12px}' +
    '.hp details{margin-top:10px}.hp details summary{cursor:pointer;font-size:12px;color:var(--hub-muted,#9097c4);padding:4px 0}' +
    '.hp table{width:100%;border-collapse:collapse;font-size:12px;margin-top:6px}.hp td,.hp th{padding:6px 4px;border-top:1px solid var(--hub-line,#202549);text-align:left;color:var(--hub-text,#f5f6ff)}.hp th{font-weight:600;color:var(--hub-muted,#9097c4)}' +
    '.hp td:last-child,.hp th:last-child{text-align:right;font-variant-numeric:tabular-nums}';
  function ensureCss() {
    if (document.getElementById('hub-progress-css')) return;
    var st = document.createElement('style'); st.id = 'hub-progress-css'; st.textContent = CSS; document.head.appendChild(st);
  }

  // ---------- shared UI pieces ----------
  var ui = {
    tile: function (label, value, sub) {
      return '<div class="hp-tile"><div class="hp-l">' + esc(label) + '</div><div class="hp-v">' + esc(value) + '</div>' + (sub ? '<div class="hp-s">' + esc(sub) + '</div>' : '') + '</div>';
    },
    // items: [{label, value, tip, neg?, dim?}]; shows value above only the last + max bars (selective labels)
    columns: function (id, items, opts) {
      opts = opts || {};
      var vals = items.map(function (i) { return i.value; });
      var max = Math.max.apply(null, vals.concat([opts.minMax || 1])), min = Math.min.apply(null, vals.concat([0]));
      var span = max - min || 1, zero = (0 - min) / span; // fraction of height where zero sits
      var H = 130, grid = '';
      var fmt = opts.fmt || function (v) { return String(v); };
      [max, 0].concat(min < 0 ? [min] : []).forEach(function (g) {
        var y = (1 - (g - min) / span) * H;
        grid += '<div class="hp-grid" style="top:' + y + 'px"></div><div class="hp-gl" style="top:' + y + 'px">' + esc(fmt(g)) + '</div>';
      });
      var maxIdx = vals.indexOf(Math.max.apply(null, vals));
      var cols = items.map(function (it, i) {
        var h = Math.abs(it.value) / span * H;
        var showV = (i === items.length - 1 || i === maxIdx) && it.value !== 0;
        var neg = it.value < 0;
        // positive bars sit on the zero line; negative hang below it
        var pos = 'justify-content:flex-end;padding-bottom:' + (zero * H) + 'px';
        var bar = neg
          ? '<div style="position:absolute;top:' + ((1 - zero) * H) + 'px;width:100%;display:flex;flex-direction:column;align-items:center"><div class="hp-bar" style="height:' + h + 'px;border-radius:0 0 4px 4px"></div></div>'
          : '<div class="hp-bar" style="height:' + h + 'px"></div>';
        return '<button type="button" class="hp-col' + (neg ? ' neg' : '') + (it.dim ? ' dim' : '') + '" data-tip="' + esc(it.tip || (it.label + ': ' + fmt(it.value))) + '" aria-label="' + esc(it.tip || (it.label + ': ' + fmt(it.value))) + '" style="' + pos + '">' +
          (showV ? '<span class="hp-bv">' + esc(fmt(it.value)) + '</span>' : '') + bar + '</button>';
      }).join('');
      var xl = items.map(function (it) { return '<span>' + esc(it.label) + '</span>'; }).join('');
      var table = '<details><summary>View as table</summary><table><tr><th>' + esc(opts.colHead || 'Period') + '</th><th>' + esc(opts.valHead || 'Value') + '</th></tr>' +
        items.map(function (it) { return '<tr><td>' + esc(it.tip ? it.tip.split(':')[0] : it.label) + '</td><td>' + esc(fmt(it.value)) + '</td></tr>'; }).join('') + '</table></details>';
      return '<div class="hp-card" id="' + id + '"><div class="hp-cols" style="height:' + H + 'px">' + grid + cols + '</div><div class="hp-xl">' + xl + '</div><div class="hp-tip">Tap a bar for details</div>' + table + '</div>';
    },
    bindColumns: function (root) {
      root.querySelectorAll('.hp-card').forEach(function (card) {
        var tip = card.querySelector('.hp-tip'); if (!tip) return;
        card.querySelectorAll('.hp-col').forEach(function (c) {
          function show() { tip.textContent = c.getAttribute('data-tip'); }
          c.addEventListener('click', show); c.addEventListener('mouseenter', show); c.addEventListener('focus', show);
        });
      });
    },
    hbars: function (rows, fmt) {
      var max = Math.max.apply(null, rows.map(function (r) { return r.value; }).concat([1]));
      fmt = fmt || String;
      return rows.map(function (r) {
        return '<div class="hp-hb"><div class="hp-n" title="' + esc(r.label) + '">' + esc(r.label) + '</div><div class="hp-tr"><div class="hp-f" style="width:' + (r.value / max * 100) + '%"></div></div><div class="hp-n2">' + esc(fmt(r.value)) + '</div></div>';
      }).join('');
    },
    meter: function (pct) { return '<div class="hp-meter"><i style="width:' + Math.max(0, Math.min(100, pct)) + '%"></i></div>'; },
    spark: function (vals) {
      if (vals.length < 2) return '';
      var w = 84, h = 26, pad = 5, min = Math.min.apply(null, vals), max = Math.max.apply(null, vals), sp = max - min || 1;
      var pts = vals.map(function (v, i) { return [pad + i * (w - 2 * pad) / (vals.length - 1), h - pad - (v - min) / sp * (h - 2 * pad)]; });
      var last = pts[pts.length - 1];
      return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true" style="display:block;margin-left:auto"><polyline fill="none" stroke="var(--hub-accent,#8b93ff)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '"/><circle cx="' + last[0].toFixed(1) + '" cy="' + last[1].toFixed(1) + '" r="4" fill="var(--hub-accent,#8b93ff)" stroke="var(--hub-surface,#0e1021)" stroke-width="2"/></svg>';
    }
  };

  // ---------- date helpers ----------
  function parseDay(s) { var p = String(s).slice(0, 10).split('-'); return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0); }
  function startOfWeek(d) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12); var dow = (x.getDay() + 6) % 7; x.setDate(x.getDate() - dow); return x; }
  function dayDiff(a, b) { return Math.round((b - a) / 86400000); }
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtShort(d) { return d.getDate() + ' ' + MON[d.getMonth()]; }

  // ---------- training ----------
  function training(el, cfg) {
    ensureCss();
    el.innerHTML = '<div class="hp"><div class="hp-empty">Loading your progress…</div></div>';
    if (!window.HubData || !HubData.isConfigured()) {
      el.innerHTML = '<div class="hp"><div class="hp-warn">Not connected to your database, so there is nothing to chart yet. Once it is connected, everything you log shows up here.</div></div>';
      return Promise.resolve();
    }
    return Promise.all([HubData.getSessions(cfg.tool), HubData.getPRs(cfg.tool)]).then(function (r) {
      var sessions = r[0] || [], prs = r[1] || [];
      var now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
      var html = '<div class="hp">';

      if (!sessions.length && !prs.length) {
        html += '<div class="hp-empty">Nothing logged yet.<br>Log a session or a PR and this page fills in on its own.' + (cfg.onLog ? '<br><button type="button" id="hp-golog">Go to Log</button>' : '') + '</div></div>';
        el.innerHTML = html; var g = el.querySelector('#hp-golog'); if (g) g.onclick = cfg.onLog; return;
      }

      // key numbers
      var in7 = sessions.filter(function (s) { return dayDiff(parseDay(s.date), today) <= 6 && dayDiff(parseDay(s.date), today) >= 0; }).length;
      var in30 = sessions.filter(function (s) { var d = dayDiff(parseDay(s.date), today); return d <= 29 && d >= 0; }).length;
      var sorted = sessions.slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)) || String(b.created_at || '').localeCompare(String(a.created_at || '')); });
      var last = sorted[0];
      var rot = cfg.rotation || [], nextLabel = '—', nextSub = '';
      if (rot.length) {
        var idx = last ? rot.findIndex(function (x) { return x.key === last.split; }) : -1;
        var nxt = rot[(idx + 1) % rot.length]; nextLabel = nxt.label; nextSub = last ? 'after ' + (rot[idx] ? rot[idx].label : 'your last session') : 'start of the rotation';
      }
      // week streak: consecutive weeks (ending this week or last) with 2+ sessions
      var weekCounts = {}; sessions.forEach(function (s) { var k = startOfWeek(parseDay(s.date)).getTime(); weekCounts[k] = (weekCounts[k] || 0) + 1; });
      var thisWk = startOfWeek(today), streak = 0, cursor = new Date(thisWk);
      if ((weekCounts[cursor.getTime()] || 0) < 2) cursor.setDate(cursor.getDate() - 7);
      while ((weekCounts[cursor.getTime()] || 0) >= 2) { streak++; cursor.setDate(cursor.getDate() - 7); }
      var lastAgo = last ? dayDiff(parseDay(last.date), today) : null;

      html += '<div class="hp-tiles">' +
        ui.tile('Last 7 days', in7, in7 === 1 ? 'session' : 'sessions') +
        ui.tile('Last 30 days', in30, in30 === 1 ? 'session' : 'sessions') +
        ui.tile('Next up', nextLabel, nextSub) +
        ui.tile('Week streak', streak, streak === 1 ? 'week with 2+ sessions' : 'weeks in a row with 2+ sessions') +
        '</div>';
      if (lastAgo != null) html += '<p class="hp-sub" style="margin-top:12px">Last session: ' + (lastAgo === 0 ? 'today' : lastAgo === 1 ? 'yesterday' : lastAgo + ' days ago') + ' · ' + sessions.length + ' logged in total</p>';

      // sessions per week, last 8 weeks
      var wk = [];
      for (var i = 7; i >= 0; i--) { var ws = new Date(thisWk); ws.setDate(ws.getDate() - 7 * i); wk.push({ start: ws, n: weekCounts[ws.getTime()] || 0, cur: i === 0 }); }
      html += '<h3>Sessions per week</h3><p class="hp-sub">Last 8 weeks, weeks start Monday</p>' +
        ui.columns('hp-weeks', wk.map(function (w) { return { label: w.cur ? 'now' : w.start.getDate() + '/' + (w.start.getMonth() + 1), value: w.n, dim: false, tip: 'Week of ' + fmtShort(w.start) + ': ' + w.n + (w.n === 1 ? ' session' : ' sessions') }; }),
          { minMax: 4, colHead: 'Week', valHead: 'Sessions' });

      // rotation balance
      if (rot.length) {
        var counts = rot.map(function (x) { return { label: x.label, value: sessions.filter(function (s) { return s.split === x.key; }).length }; });
        html += '<h3>Rotation balance</h3><p class="hp-sub">All sessions by day type — uneven bars mean a day is being skipped</p><div class="hp-card">' + ui.hbars(counts) + '</div>';
      }

      // PRs
      if (prs.length) {
        var byEx = {};
        prs.forEach(function (p) { var k = String(p.exercise).trim().toLowerCase(); (byEx[k] = byEx[k] || { name: String(p.exercise).trim(), list: [] }).list.push(p); });
        var groups = Object.keys(byEx).map(function (k) {
          var g = byEx[k]; g.list.sort(function (a, b) { return String(a.date).localeCompare(String(b.date)) || String(a.created_at || '').localeCompare(String(b.created_at || '')); }); return g;
        }).sort(function (a, b) { return String(b.list[b.list.length - 1].date).localeCompare(String(a.list[a.list.length - 1].date)); });
        html += '<h3>Personal records</h3><p class="hp-sub">Latest value for each exercise, and how it has moved</p><div class="hp-card">';
        groups.forEach(function (g) {
          var cur = g.list[g.list.length - 1], prev = g.list.length > 1 ? g.list[g.list.length - 2] : null;
          var unit = cur.unit ? ' ' + cur.unit : '';
          var delta = prev ? Number(cur.value) - Number(prev.value) : null;
          var dTxt = delta == null ? 'first entry' : (delta === 0 ? 'no change' : (delta > 0 ? '+' : '−') + Math.abs(Math.round(delta * 100) / 100) + unit);
          var dCls = delta == null || delta === 0 ? 'eq' : (delta > 0 ? '' : 'dn');
          var goalHtml = '';
          (cfg.goals || []).forEach(function (go) {
            if (!go.match.test(g.name)) return;
            var best = Math.max.apply(null, g.list.map(function (p) { return Number(p.value); }));
            var pct = Math.max(0, Math.min(100, (best - go.baseline) / (go.target - go.baseline) * 100));
            goalHtml = '<div class="hp-goal"><div class="hp-gt"><span>' + esc(go.label) + '</span><span>' + (best >= go.target ? 'Reached' : Math.round(pct) + '% · ' + (Math.round((go.target - best) * 10) / 10) + ' ' + esc(go.unit) + ' to go') + '</span></div>' + ui.meter(pct) + '</div>';
          });
          html += '<div class="hp-pr"><div><div class="hp-pn">' + esc(g.name) + '</div><div class="hp-pm">' + fmtShort(parseDay(cur.date)) + ' · ' + g.list.length + (g.list.length === 1 ? ' entry' : ' entries') + '</div></div>' +
            '<div><div class="hp-pv">' + esc(Number(cur.value)) + esc(unit) + '</div><div class="hp-d ' + dCls + '">' + dTxt + '</div></div>' +
            (g.list.length > 1 ? '<div style="grid-column:1/-1">' + ui.spark(g.list.map(function (p) { return Number(p.value); })) + '</div>' : '') + goalHtml + '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
      el.innerHTML = html; ui.bindColumns(el);
    });
  }

  // ---------- budget ----------
  function money(n, dp) { var v = Math.abs(Number(n) || 0); return (n < 0 ? '−' : '') + '£' + v.toLocaleString('en-GB', { minimumFractionDigits: dp || 0, maximumFractionDigits: dp || 0 }); }
  function budget(el, cfg) {
    ensureCss(); cfg = cfg || {};
    var entries = cfg.entries || [], goal = cfg.goal || 10000;
    var html = '<div class="hp">';
    if (!entries.length) {
      el.innerHTML = '<div class="hp"><div class="hp-empty">No entries yet.<br>Add income and outgoings and your overview builds itself.</div></div>'; return;
    }
    var now = new Date(), curKey = now.getFullYear() * 12 + now.getMonth();
    function mkey(d) { var x = parseDay(d); return x.getFullYear() * 12 + x.getMonth(); }
    var inc = 0, out = 0, byMonth = {};
    entries.forEach(function (e) {
      var a = Number(e.amount) || 0, k = mkey(e.date);
      var m = byMonth[k] = byMonth[k] || { inc: 0, out: 0 };
      if (e.type === 'income') { inc += a; m.inc += a; } else { out += a; m.out += a; }
    });
    var net = inc - out, thisM = byMonth[curKey] || { inc: 0, out: 0 };
    var l3 = [0, 1, 2].map(function (i) { return byMonth[curKey - i] || { inc: 0, out: 0 }; });
    var avgOut = (l3[0].out + l3[1].out + l3[2].out) / 3;
    html += '<div class="hp-tiles">' +
      ui.tile('Net so far', money(net), 'income minus outgoings, all entries') +
      ui.tile('This month', money(thisM.inc - thisM.out), money(thisM.inc) + ' in · ' + money(thisM.out) + ' out') +
      ui.tile('Avg monthly outgoings', money(avgOut), 'over the last 3 months') +
      ui.tile('Entries', entries.length, 'logged in total') + '</div>';

    var pct = Math.max(0, Math.min(100, net / goal * 100));
    html += '<h3>Goal: ' + money(goal) + '</h3><p class="hp-sub">Measured as net of everything entered here, so it only matches your savings if every pound is logged</p><div class="hp-card"><div class="hp-gt" style="display:flex;justify-content:space-between;font-size:12px;color:var(--hub-muted);margin-bottom:6px"><span>' + money(Math.max(net, 0)) + ' of ' + money(goal) + '</span><span>' + Math.round(pct) + '%</span></div>' + ui.meter(pct) + '<div class="hp-sub" style="margin:8px 0 0">' + (net >= goal ? 'Goal reached.' : money(goal - Math.max(net, 0)) + ' to go.') + '</div></div>';

    var months = []; for (var i = 5; i >= 0; i--) { var k = curKey - i, m = byMonth[k] || { inc: 0, out: 0 }, y = Math.floor(k / 12), mo = k % 12; months.push({ label: MON[mo], value: Math.round((m.inc - m.out) * 100) / 100, tip: MON[mo] + ' ' + y + ': ' + money(m.inc - m.out) + ' net (' + money(m.inc) + ' in, ' + money(m.out) + ' out)' }); }
    html += '<h3>Net per month</h3><p class="hp-sub">Income minus outgoings, last 6 months</p>' + ui.columns('hp-net', months, { fmt: function (v) { return money(v); }, colHead: 'Month', valHead: 'Net' });

    var catTotals = {};
    entries.forEach(function (e) { if (e.type !== 'outgoing') return; var d = mkey(e.date); if (curKey - d > 2 || d > curKey) return; var c = (e.category || 'Uncategorised').trim() || 'Uncategorised'; catTotals[c] = (catTotals[c] || 0) + Number(e.amount || 0); });
    var cats = Object.keys(catTotals).map(function (c) { return { label: c, value: catTotals[c] }; }).sort(function (a, b) { return b.value - a.value; });
    if (cats.length) {
      if (cats.length > 6) { var rest = cats.slice(5).reduce(function (s, c) { return s + c.value; }, 0); cats = cats.slice(0, 5).concat([{ label: 'Other', value: rest }]); }
      html += '<h3>Where it goes</h3><p class="hp-sub">Outgoings by category, last 3 months</p><div class="hp-card">' + ui.hbars(cats, function (v) { return money(v); }) + '</div>';
    }
    html += '</div>';
    el.innerHTML = html; ui.bindColumns(el);
  }

  window.HubProgress = { training: training, budget: budget, ui: ui, ensureCss: ensureCss };
})();
