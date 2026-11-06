// 오프라인용: 앱 파일을 아이패드에 보관해 두고 인터넷 없이도 열리게 합니다.
// 앱을 고쳐 다시 올릴 때는 아래 버전 숫자만 올려 주세요.
var CACHE = 'piano-schedule-v10';
var FILES = ['./', './index.html', './firebase-config.js', './manifest.webmanifest', './logo-ink.png', './piano-ink.png', './orda-mark.png', './orda-word.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
// 바깥에서 받아 오는 프로그램(사진 만들기, Firebase)도 한 번 받으면 보관
var CDN = ['https://cdnjs.cloudflare.com/', 'https://www.gstatic.com/firebasejs/'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = req.url;
  var same = url.indexOf(self.location.origin) === 0;
  var cdn = CDN.some(function (p) { return url.indexOf(p) === 0; });
  if (!same && !cdn) return;            // Firebase 데이터 통신 등은 건드리지 않음
  if (cdn) {                            // 바깥 프로그램: 보관본 먼저
    e.respondWith(caches.match(req).then(function (r) {
      return r || fetch(req).then(function (res) {
        var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); return res;
      });
    }));
    return;
  }
  e.respondWith(                        // 앱 파일: 인터넷 되면 최신, 안 되면 보관본
    fetch(req).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('./index.html'); });
    })
  );
});
