var cacheName = 'THISISMYPPAP_0.0.1';
var filesToCache = [
	'/',
	'/index.html',
	'/bower_components/webcomponentsjs/webcomponents-lite.js',
	'/bower_components/polymer/polymer.html',
	'/bower_components/polymer/polymer-mini.html',
	'/bower_components/polymer/polymer-micro.html',

	'/bower_components/app-route/app-location.html',
	'/bower_components/app-route/app-route.html',
	'/bower_components/iron-location/iron-location.html',
	'/bower_components/iron-location/iron-query-params.html',
	'/bower_components/app-route/app-route-converter-behavior.html',
	'/bower_components/iron-input/iron-input.html',
	'/bower_components/iron-icons/iron-icons.html',
	'/bower_components/paper-icon-button/paper-icon-button.html',
	'/bower_components/iron-flex-layout/iron-flex-layout-classes.html',
	'/bower_components/iron-resizable-behavior/iron-resizable-behavior.html',
	'/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html',
	'/bower_components/iron-selector/iron-selectable.html',
	'/bower_components/iron-selector/iron-multi-selectable.html',
	'/bower_components/iron-a11y-announcer/iron-a11y-announcer.html',
	'/bower_components/iron-validatable-behavior/iron-validatable-behavior.html',
	'/bower_components/iron-icon/iron-icon.html',
	'/bower_components/iron-iconset-svg/iron-iconset-svg.html',
	'/bower_components/paper-behaviors/paper-inky-focus-behavior.html',
	'/bower_components/paper-styles/default-theme.html',
	'/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html',
	'/bower_components/iron-selector/iron-selection.html',
	'/bower_components/iron-meta/iron-meta.html',
	'/bower_components/iron-behaviors/iron-button-state.html',
	'/bower_components/paper-behaviors/paper-ripple-behavior.html',
	'/bower_components/paper-styles/color.html',
	'/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
	'/bower_components/iron-behaviors/iron-control-state.html',
	'/bower_components/paper-ripple/paper-ripple.html',

	'/bower_components/paper-search-input/paper-search-input.html',
	'/bower_components/app-layout/app-header/app-header.html',
	'/bower_components/app-layout/app-scroll-effects/effects/waterfall.html',
	'/bower_components/app-layout/app-toolbar/app-toolbar.html',
	'/bower_components/app-layout/helpers/helpers.html',
	'/bower_components/iron-media-query/iron-media-query.html',
	'/bower_components/iron-pages/iron-pages.html',
	'/bower_components/iron-selector/iron-selector.html',
	'/bower_components/iron-flex-layout/iron-flex-layout.html',
	'/bower_components/app-layout/app-drawer/app-drawer.html',

	'/src/polymer-app/polymer-app.html',
	'/src/polymer-app/hot-data.html',
	'/src/polymer-app/shop-image.html',
	'/src/polymer-app/shop-button.html',
	'/src/polymer-app/lazy-resources.html',
	'/src/polymer-app/common-style.html',
	'/src/polymer-app/app-404-warn.html',
	'/src/polymer-app/app-home.html',
	'/src/polymer-app/list.html',
	'/data/环太平洋.json',
	'/data/神秘东南亚.json',
	'/data/红土澳洲.json'
];

self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	)
});

self.addEventListener('activate', function (e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map(function (key) {
				console.log('[ServiceWorker] Removing old cache', key);
				if (key !== cacheName) {
					return caches.delete(key);
				}
			}))
		})
	)
});

self.addEventListener('fetch', function (e) {
	console.log('[ServiceWorker] Fetch', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function (response) {
			return response || fetch(e.request);
		})
	)
})





