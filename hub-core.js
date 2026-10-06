/* Training Hub — shared core: themes, back/home bar, page lock.
   Load as the FIRST script in <head> on every page so the theme is applied before
   first paint and locked pages never flash their contents.

   Everything here is client-side and per-device (localStorage). The PIN lock is a
   convenience lock that keeps a casual glance at your phone out of your budget —
   it is not encryption, and it does not protect data stored in the database. */
(function () {
  'use strict';

  // ---------- tiny safe storage helpers ----------
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function ssGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  function ssDel(k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  function jget(store, k, d) { try { var v = store(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }

  var path = location.pathname;
  var file = (path.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  var inFiles = /\/files\/[^/]*$/.test(path);
  var ROOT = inFiles ? '../' : '';
  var IS_SETTINGS = file === 'settings';
  var IS_HUB = file === 'index';
  var TOOL_ID = (inFiles) ? file : null;

  // ---------- colour helpers ----------
  function hex2rgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/(.)/g, '$1$1'); var n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function rgb2hex(r) { return '#' + r.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? '0' : '') + v.toString(16); }).join(''); }
  function mix(a, b, t) { var A = hex2rgb(a), B = hex2rgb(b); return rgb2hex([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]); }

  // ---------- themes (all dark) ----------
  // bg < bg2 < bg3 are stacked surfaces; muted/faint are secondary/tertiary text on bg.
  var THEMES = {
    midnight: { name: 'Midnight', note: 'Blue-violet on near-black', bg: '#07080f', bg2: '#0e1021', bg3: '#161a33', border: '#202549', border2: '#2e3566', text: '#f5f6ff', muted: '#9097c4', faint: '#6b72a3', muted2: '#4b5282', accent: '#8b93ff', accent2: '#b9a6ff', good: '#4be3a1', crit: '#ff7087' },
    nebula:   { name: 'Nebula', note: 'Deep purple and black', bg: '#09050f', bg2: '#130a22', bg3: '#1d1233', border: '#2b1a4e', border2: '#3d2872', text: '#f9f5ff', muted: '#a592cc', faint: '#7c69a8', muted2: '#5a4a88', accent: '#b57bff', accent2: '#e0a8ff', good: '#4be3a1', crit: '#ff7087' },
    ocean:    { name: 'Deep Ocean', note: 'Cold blue and black', bg: '#050a13', bg2: '#0a1625', bg3: '#10223b', border: '#17304f', border2: '#244671', text: '#f2f8ff', muted: '#85a3c8', faint: '#5f7fa8', muted2: '#44648c', accent: '#4aa8ff', accent2: '#85d3ff', good: '#4be3a1', crit: '#ff7087' },
    ember:    { name: 'Ember', note: 'The original copper, in the dark', bg: '#0f0d0b', bg2: '#171310', bg3: '#211b15', border: '#2d251d', border2: '#3d3327', text: '#f7f0e7', muted: '#a09484', faint: '#7a6f61', muted2: '#5c5246', accent: '#e09a55', accent2: '#efb37c', good: '#68b77c', crit: '#e5806f' },
    gold:     { name: 'Classic Gold', note: 'Black and gold, as before', bg: '#0c0c0c', bg2: '#141414', bg3: '#1c1c1c', border: '#222222', border2: '#2c2c2c', text: '#f0f0f0', muted: '#8a8a8a', faint: '#666666', muted2: '#4a4a4a', accent: '#e2b96b', accent2: '#f0c97a', good: '#52d98a', crit: '#e05252' },
    mono:     { name: 'Mono', note: 'Pure black and white', bg: '#000000', bg2: '#0c0c0c', bg3: '#161616', border: '#232323', border2: '#343434', text: '#ffffff', muted: '#9a9a9a', faint: '#737373', muted2: '#4d4d4d', accent: '#ffffff', accent2: '#d8d8d8', good: '#52d98a', crit: '#ff6b6b' }
  };
  var DEFAULT_THEME = 'midnight';
  var FAMILY_B = { index: 1, 'budget-plan': 1, 'food-plan': 1, settings: 1, dashboard: 1 }; // pages styled with --ground/--ink names

  function getTheme() { var t = lsGet('hub.theme'); return THEMES[t] ? t : DEFAULT_THEME; }

  function applyTheme(key) {
    var T = THEMES[key] || THEMES[DEFAULT_THEME];
    var r = document.documentElement, s = r.style;
    function set(k, v) { s.setProperty(k, v); }
    // family A: --bg/--text (Hooper, Couples, Stretch, Uni Study)
    set('--bg', T.bg); set('--bg2', T.bg2); set('--bg3', T.bg3);
    set('--border', T.border); set('--border2', T.border2);
    set('--text', T.text); set('--muted', T.muted); set('--muted2', T.muted2);
    // family B: --ground/--ink (Hub, Budget, Food, Settings)
    set('--ground', T.bg); set('--surface', T.bg2); set('--surface-2', T.bg3); set('--line', T.border);
    set('--ink', T.text); set('--ink-dim', T.muted); set('--ink-faint', T.faint);
    set('--copper', T.accent); set('--copper-ink', T.accent2);
    set('--good', T.good); set('--crit', T.crit);
    set('--good-tint', mix(T.bg2, T.good, 0.14)); set('--crit-tint', mix(T.bg2, T.crit, 0.14));
    set('--body-c', '#7ea7d8'); set('--body-tint', mix(T.bg2, '#7ea7d8', 0.14));
    set('--study-c', '#b19cd9'); set('--study-tint', mix(T.bg2, '#b19cd9', 0.14));
    set('--life-c', '#d9b448'); set('--life-tint', mix(T.bg2, '#d9b448', 0.14));
    set('--shadow', '0 1px 2px rgba(0,0,0,.45)');
    if (FAMILY_B[file]) { set('--gold', '#d9b448'); set('--gold-tint', mix(T.bg2, '#d9b448', 0.14)); }
    else { set('--gold', T.accent); set('--gold2', T.accent2); }
    // shared hub tokens (used by the back bar, lock screen, settings, progress views)
    set('--hub-bg', T.bg); set('--hub-surface', T.bg2); set('--hub-surface2', T.bg3);
    set('--hub-line', T.border); set('--hub-line2', T.border2);
    set('--hub-text', T.text); set('--hub-muted', T.muted); set('--hub-faint', T.faint);
    set('--hub-accent', T.accent); set('--hub-accent2', T.accent2);
    set('--hub-good', T.good); set('--hub-crit', T.crit);
    set('--hub-nav', mix(T.bg, '#000000', 0.45));
    set('--hub-on-accent', luminance(T.accent) > 0.5 ? '#000000' : '#ffffff');
    set('color-scheme', 'dark');
    r.setAttribute('data-hub-theme', key);
    var m = document.querySelector('meta[name="theme-color"]');
    if (!m && document.head) { m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
    if (m) m.setAttribute('content', T.bg);
  }
  function luminance(h) { var c = hex2rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }

  function setTheme(key) { if (!THEMES[key]) return; lsSet('hub.theme', key); applyTheme(key); }
  applyTheme(getTheme());

  // ---------- shared CSS (bar, lock screen, overrides) ----------
  var CSS = '' +
    'html.hub-locked body{visibility:hidden!important}' +
    '.hub-bar{position:sticky;top:0;z-index:300;display:flex;align-items:center;gap:8px;padding:calc(env(safe-area-inset-top,0px) + 6px) 10px 6px;background:var(--hub-nav);border-bottom:1px solid var(--hub-line);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}' +
    '.hub-bar a,.hub-bar button{display:inline-flex;align-items:center;gap:6px;min-height:34px;padding:0 12px;border-radius:999px;border:1px solid var(--hub-line);background:var(--hub-surface);color:var(--hub-text);font:600 13px/1 -apple-system,BlinkMacSystemFont,system-ui,sans-serif;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '.hub-bar a:active,.hub-bar button:active{background:var(--hub-surface2)}' +
    '.hub-bar .hb-sp{flex:1}' +
    '.hub-bar .hb-ico{font-size:15px;line-height:1}' +
    'body.has-hub-bar{padding-top:0!important}' +
    'body.has-hub-bar .back{display:none!important}' +
    'body.has-hub-bar .nav{top:var(--hub-bar-h,46px)!important;background:var(--hub-nav)!important}' +
    '.warning-box{background:color-mix(in srgb,var(--hub-accent) 10%,var(--hub-surface))!important;border-color:var(--hub-accent)!important}' +
    '.warning-title,.info-title,.ex-shift{color:var(--hub-accent2)!important}' +
    '.info-box,.log-banner{background:var(--hub-surface)!important;border-color:var(--hub-line2)!important}' +
    'body.has-hub-bar .nav-brand{-webkit-text-fill-color:initial;background:none;color:var(--hub-accent2)}' +
    '.hub-lock{position:fixed;inset:0;z-index:99999;background:var(--hub-bg);color:var(--hub-text);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:calc(env(safe-area-inset-top,0px) + 20px) 24px calc(env(safe-area-inset-bottom,0px) + 20px);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;visibility:visible!important;touch-action:manipulation}' +
    '.hub-lock h2{margin:0;font-size:20px;font-weight:650;letter-spacing:.01em}' +
    '.hub-lock p{margin:0;color:var(--hub-muted);font-size:13px;text-align:center;min-height:18px}' +
    '.hub-lock .hl-ic{width:54px;height:54px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;background:var(--hub-surface);border:1px solid var(--hub-line)}' +
    '.hub-lock .hl-dots{display:flex;gap:14px;height:16px;margin:6px 0 4px}' +
    '.hub-lock .hl-dots i{width:13px;height:13px;border-radius:50%;border:2px solid var(--hub-line2);display:block;transition:background .1s,border-color .1s}' +
    '.hub-lock .hl-dots i.on{background:var(--hub-accent);border-color:var(--hub-accent)}' +
    '.hub-lock .hl-dots.shake{animation:hlshake .35s}' +
    '@keyframes hlshake{20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}' +
    '.hub-lock .hl-pad{display:grid;grid-template-columns:repeat(3,72px);gap:12px;margin-top:6px}' +
    '.hub-lock .hl-pad button{height:72px;border-radius:50%;border:1px solid var(--hub-line);background:var(--hub-surface);color:var(--hub-text);font:500 26px/1 -apple-system,system-ui,sans-serif;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '.hub-lock .hl-pad button:active{background:var(--hub-surface2)}' +
    '.hub-lock .hl-pad button.hl-ghost{background:none;border-color:transparent;font-size:14px;color:var(--hub-muted)}' +
    '.hub-lock .hl-cancel{background:none;border:none;color:var(--hub-muted);font:600 13px/1 -apple-system,system-ui,sans-serif;padding:10px;cursor:pointer}' +
    '.hub-toast{position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 22px);transform:translateX(-50%);z-index:100000;background:var(--hub-surface2);color:var(--hub-text);border:1px solid var(--hub-line2);border-radius:12px;padding:11px 16px;font:600 13px/1.3 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px rgba(0,0,0,.5);max-width:86vw;text-align:center}';
  var styleEl = document.createElement('style');
  styleEl.id = 'hub-core-css';
  styleEl.textContent = CSS;
  (document.head || document.documentElement).appendChild(styleEl);

  // ensure the page can draw behind the status bar / home indicator consistently
  function patchViewport() {
    var v = document.querySelector('meta[name="viewport"]');
    if (!v) { v = document.createElement('meta'); v.name = 'viewport'; v.content = 'width=device-width, initial-scale=1.0'; document.head.appendChild(v); }
    if (v.content.indexOf('viewport-fit') < 0) v.content += ', viewport-fit=cover';
  }

  // ---------- PIN lock ----------
  var LOCK_KEY = 'hub.lock.v1';
  var FAIL_KEY = 'hub.lock.fail';
  var ACTIVE_KEY = 'hub.lock.active';
  var RELOCK_OPTIONS = [
    { v: 0, label: 'Every time I open a locked page' },
    { v: 1, label: 'After 1 minute away' },
    { v: 5, label: 'After 5 minutes away' },
    { v: 15, label: 'After 15 minutes away' },
    { v: -1, label: 'Only when the app is closed' }
  ];

  function lockCfg() { return jget(lsGet, LOCK_KEY, null); }
  function saveLock(c) { lsSet(LOCK_KEY, JSON.stringify(c)); }
  function lockEnabled() { var c = lockCfg(); return !!(c && c.hash); }
  function toolIsLocked(id) { var c = lockCfg(); return !!(c && c.hash && c.pages && c.pages[id]); }

  function b64(buf) { var s = ''; new Uint8Array(buf).forEach(function (b) { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function unb64(str) { str = str.replace(/-/g, '+').replace(/_/g, '/'); while (str.length % 4) str += '='; var bin = atob(str), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }

  function hashPin(pin, saltB64) {
    var enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveBits']).then(function (key) {
      return crypto.subtle.deriveBits({ name: 'PBKDF2', salt: unb64(saltB64), iterations: 150000, hash: 'SHA-256' }, key, 256);
    }).then(b64);
  }

  function setPin(pin, len) {
    var salt = b64(crypto.getRandomValues(new Uint8Array(16)));
    return hashPin(pin, salt).then(function (h) {
      var c = lockCfg() || {};
      c.salt = salt; c.hash = h; c.len = len;
      if (!c.pages) c.pages = {};
      if (c.relock == null) c.relock = 5;
      saveLock(c);
      markActive(true);
      return true;
    });
  }
  function verifyPin(pin) {
    var c = lockCfg(); if (!c || !c.hash) return Promise.resolve(true);
    return hashPin(pin, c.salt).then(function (h) { return h === c.hash; });
  }
  function failState() { return jget(lsGet, FAIL_KEY, { n: 0, until: 0 }); }
  function registerFail() {
    var f = failState(); f.n++;
    if (f.n >= 5) f.until = Date.now() + Math.min(15 * 60000, 30000 * Math.pow(2, f.n - 5));
    lsSet(FAIL_KEY, JSON.stringify(f)); return f;
  }
  function clearFail() { lsDel(FAIL_KEY); }

  function markActive(unlocked) { ssSet(ACTIVE_KEY, JSON.stringify({ t: Date.now(), u: unlocked ? 1 : (jget(ssGet, ACTIVE_KEY, {}).u || 0) })); }
  function isUnlocked() {
    var c = lockCfg(); if (!c || !c.hash) return true;
    var a = jget(ssGet, ACTIVE_KEY, null); if (!a || !a.u) return false;
    var relock = c.relock == null ? 5 : c.relock;
    if (relock === -1) return true;
    if (relock === 0) return !!a.once; // unlocked for this page view only
    return (Date.now() - a.t) < relock * 60000;
  }
  function lockNow() { ssDel(ACTIVE_KEY); if (TOOL_ID && toolIsLocked(TOOL_ID)) showLockScreen(); }

  // keep "last active" fresh while a page is in use so the away-timer measures time away
  setInterval(function () { var a = jget(ssGet, ACTIVE_KEY, null); if (a && a.u && !document.hidden) { a.t = Date.now(); ssSet(ACTIVE_KEY, JSON.stringify(a)); } }, 15000);
  document.addEventListener('visibilitychange', function () {
    var a = jget(ssGet, ACTIVE_KEY, null);
    if (document.hidden && a && a.u) { a.t = Date.now(); ssSet(ACTIVE_KEY, JSON.stringify(a)); }
    else if (!document.hidden && TOOL_ID && toolIsLocked(TOOL_ID) && !isUnlocked() && !document.querySelector('.hub-lock')) showLockScreen();
  });

  // passkey (Face ID / Touch ID) — a local gate only; there is no server to verify against
  function passkeySupported() { return !!(window.PublicKeyCredential && navigator.credentials && navigator.credentials.create); }
  function registerPasskey() {
    if (!passkeySupported()) return Promise.reject(new Error('Not supported on this browser'));
    var opts = {
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rp: { name: 'Training Hub', id: location.hostname },
      user: { id: crypto.getRandomValues(new Uint8Array(16)), name: 'training-hub', displayName: 'Training Hub' },
      pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
      authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'preferred' },
      timeout: 60000, attestation: 'none'
    };
    return navigator.credentials.create({ publicKey: opts }).then(function (cred) {
      var c = lockCfg() || {}; c.passkey = b64(cred.rawId); saveLock(c); return true;
    });
  }
  function removePasskey() { var c = lockCfg(); if (c) { delete c.passkey; saveLock(c); } }
  function passkeyUnlock() {
    var c = lockCfg();
    if (!c || !c.passkey || !passkeySupported()) return Promise.reject(new Error('No passkey'));
    return navigator.credentials.get({ publicKey: {
      challenge: crypto.getRandomValues(new Uint8Array(32)), rpId: location.hostname, timeout: 60000,
      userVerification: 'required', allowCredentials: [{ type: 'public-key', id: unb64(c.passkey), transports: ['internal'] }]
    } }).then(function () { return true; });
  }

  // lock screen UI — resolves true when unlocked, false if cancelled
  var lockPromise = null;
  function showLockScreen(opts) {
    opts = opts || {};
    if (lockPromise) return lockPromise;
    var c = lockCfg(); if (!c || !c.hash) return Promise.resolve(true);
    var len = c.len || 4, pin = '', busy = false;
    var el = document.createElement('div');
    el.className = 'hub-lock';
    var dots = ''; for (var i = 0; i < len; i++) dots += '<i></i>';
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'FID', '0', 'DEL'];
    var padHtml = keys.map(function (k) {
      if (k === 'FID') return (c.passkey && passkeySupported()) ? '<button type="button" class="hl-ghost" data-k="fid" aria-label="Use Face ID">Face ID</button>' : '<button type="button" class="hl-ghost" disabled style="visibility:hidden"></button>';
      if (k === 'DEL') return '<button type="button" class="hl-ghost" data-k="del" aria-label="Delete">⌫</button>';
      return '<button type="button" data-k="' + k + '">' + k + '</button>';
    }).join('');
    el.innerHTML = '<div class="hl-ic">🔒</div><h2>' + (opts.title || 'Locked') + '</h2><p id="hl-msg">Enter your ' + len + '-digit PIN</p>' +
      '<div class="hl-dots" id="hl-dots">' + dots + '</div><div class="hl-pad">' + padHtml + '</div>' +
      '<button type="button" class="hl-cancel" data-k="cancel">' + (opts.cancelLabel || (TOOL_ID ? 'Back to Hub' : 'Cancel')) + '</button>';
    document.documentElement.appendChild(el);
    document.documentElement.classList.add('hub-locked');
    var msg = el.querySelector('#hl-msg'), dotEls = el.querySelectorAll('.hl-dots i'), dotWrap = el.querySelector('#hl-dots');
    function paint() { dotEls.forEach(function (d, i) { d.classList.toggle('on', i < pin.length); }); }
    function done(ok) {
      if (ok) { ssSet(ACTIVE_KEY, JSON.stringify({ t: Date.now(), u: 1, once: 1 })); clearFail(); }
      el.remove(); lockPromise = null;
      // on a locked tool page, cancelling redirects away, so keep the content hidden until then
      if (ok || !TOOL_ID) document.documentElement.classList.remove('hub-locked');
      resolve && resolve(ok);
    }
    var resolve;
    lockPromise = new Promise(function (r) { resolve = r; });
    function wait() { var f = failState(); return f.until > Date.now() ? Math.ceil((f.until - Date.now()) / 1000) : 0; }
    function submit() {
      var w = wait();
      if (w) { msg.textContent = 'Too many tries — wait ' + w + 's'; pin = ''; paint(); return; }
      busy = true;
      verifyPin(pin).then(function (ok) {
        busy = false;
        if (ok) { done(true); return; }
        var f = registerFail(); pin = ''; paint();
        dotWrap.classList.remove('shake'); void dotWrap.offsetWidth; dotWrap.classList.add('shake');
        msg.textContent = f.n >= 5 ? 'Too many tries — wait ' + wait() + 's' : 'Wrong PIN';
      });
    }
    function tryFace() {
      msg.textContent = 'Checking Face ID…';
      passkeyUnlock().then(function () { done(true); }).catch(function () { msg.textContent = 'Face ID didn’t work — use your PIN'; });
    }
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var k = b.getAttribute('data-k');
      if (k === 'cancel') { done(false); if (TOOL_ID) location.replace(ROOT + 'index.html'); return; }
      if (busy) return;
      if (k === 'del') { pin = pin.slice(0, -1); paint(); return; }
      if (k === 'fid') { tryFace(); return; }
      if (/^\d$/.test(k) && pin.length < len) { pin += k; paint(); if (pin.length === len) submit(); }
    });
    if (c.passkey && passkeySupported() && !opts.noAuto) setTimeout(tryFace, 250);
    return lockPromise;
  }

  // gate the page this script is running on
  function gatePage() {
    if (!TOOL_ID) return;
    if (!toolIsLocked(TOOL_ID)) return;
    if (isUnlocked()) { markActive(true); return; }
    document.documentElement.classList.add('hub-locked');
    showLockScreen();
  }

  // ask for unlock from the Hub for a given tool; resolves true if allowed through
  function requestUnlock(toolId) {
    if (!toolIsLocked(toolId) || isUnlocked()) return Promise.resolve(true);
    return showLockScreen({ title: 'Locked', cancelLabel: 'Cancel', noAuto: false }).then(function (ok) { document.documentElement.classList.remove('hub-locked'); return ok; });
  }

  // after a page view that required the "every time" option, consume the one-shot unlock
  function consumeOnce() {
    var c = lockCfg(); if (!c || c.relock !== 0) return;
    var a = jget(ssGet, ACTIVE_KEY, null); if (a && a.once) { a.once = 0; a.u = 0; ssSet(ACTIVE_KEY, JSON.stringify(a)); }
  }
  window.addEventListener('pagehide', consumeOnce);

  // ---------- back / home bar ----------
  function injectBar() {
    if (IS_HUB || !document.body || document.querySelector('.hub-bar')) return;
    var bar = document.createElement('div');
    bar.className = 'hub-bar';
    var locked = TOOL_ID && toolIsLocked(TOOL_ID);
    bar.innerHTML = '<a href="' + ROOT + 'index.html" aria-label="Back to Training Hub"><span class="hb-ico">‹</span> Hub</a><span class="hb-sp"></span>' +
      (locked ? '<button type="button" id="hb-lock" aria-label="Lock now"><span class="hb-ico">🔒</span> Lock</button>' : '') +
      (IS_SETTINGS ? '' : '<a href="' + ROOT + 'settings.html" aria-label="Settings"><span class="hb-ico">⚙</span></a>');
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.classList.add('has-hub-bar');
    function size() { document.documentElement.style.setProperty('--hub-bar-h', bar.offsetHeight + 'px'); }
    size(); window.addEventListener('resize', size);
    var lb = bar.querySelector('#hb-lock');
    if (lb) lb.addEventListener('click', function () { ssDel(ACTIVE_KEY); showLockScreen(); });
  }

  function toast(text, ms) {
    var t = document.createElement('div'); t.className = 'hub-toast'; t.textContent = text;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, ms || 2600);
  }

  // ---------- public API ----------
  window.HubCore = {
    THEMES: THEMES, getTheme: getTheme, setTheme: setTheme, ROOT: ROOT, TOOL_ID: TOOL_ID, toast: toast,
    lock: {
      enabled: lockEnabled, config: lockCfg, save: saveLock, setPin: setPin, verifyPin: verifyPin,
      isToolLocked: toolIsLocked, isUnlocked: isUnlocked, now: lockNow, request: requestUnlock, show: showLockScreen,
      remove: function () { lsDel(LOCK_KEY); clearFail(); ssDel(ACTIVE_KEY); },
      relockOptions: RELOCK_OPTIONS, passkeySupported: passkeySupported,
      registerPasskey: registerPasskey, removePasskey: removePasskey
    }
  };

  gatePage();
  document.addEventListener('DOMContentLoaded', function () { patchViewport(); injectBar(); if (TOOL_ID && toolIsLocked(TOOL_ID) && isUnlocked()) markActive(true); });
})();
