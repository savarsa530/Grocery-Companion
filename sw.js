/**
 * Grocery Companion — Service Worker
 * Caches the app shell for offline use.
 * Supabase API calls always go to the network.
 */

const CACHE = 'grocery-v2.0.0';
const SHELL = [
  './',
  './index.html',
  './config.js',
  './strings.js',
  './manifest.json',
  './icon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Always use network for Supabase (REST + Realtime) and CDN scripts
  if (
    e.request.url.includes('supabase.co') ||
    e.request.url.includes('jsdelivr.net') ||
    e.request.url.includes('fonts.googleapis.com') ||
    e.request.url.includes('fonts.gstatic.com')
  ) return;

  // Cache-first for app shell; fall back to network
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
