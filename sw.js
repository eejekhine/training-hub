// Training Hub service worker.
// Goal: every page opens offline, but you always get the newest version when you're online.
// Strategy: network-first (fall back to the saved copy if the network is slow or gone).
const CACHE = 'training-hub-v5';
const PRECACHE = [
  './', './index.html', './settings.html', './manifest.json', './tools.json',
  './hub-core.js', './hub-data.js', './hub-progress.js', './config.js',
  './icon-192.png', './icon-512.png',
  './files/hooper-programme.html', './files/couples-routine.html', './files/daily-stretch.html',
  './files/budget-plan.html', './files/food-plan.html', './files/uni-study.html', './files/dashboard.html'
];
const NETWORK_TIMEOUT_MS = 3500;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // add one by one so a single missing file can't block the whole install
      Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

function networkFirst(request) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (res) => { if (!settled && res) { settled = true; resolve(res); } };
    const timer = setTimeout(() => { caches.match(request, { ignoreSearch: true }).then(finish); }, NETWORK_TIMEOUT_MS);
    fetch(request)
      .then((res) => {
        clearTimeout(timer);
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        finish(res);
      })
      .catch(() => {
        clearTimeout(timer);
        caches.match(request, { ignoreSearch: true }).then((cached) => {
          if (cached) return finish(cached);
          if (request.mode === 'navigate') return caches.match('./index.html').then((h) => finish(h || Response.error()));
          finish(Response.error());
        });
      });
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // never cache live database calls
  if (url.hostname.endsWith('supabase.co')) return;
  event.respondWith(networkFirst(req));
});
