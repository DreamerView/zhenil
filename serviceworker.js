const CACHE_NAME = "version-4";
const urlsToCache = ['style.css', 'offline.html'];

const self = this;

self.addEventListener('install', async(event) => {
   const cache = await caches.open(CACHE_NAME);
   await cache.addAll(urlsToCache);
});

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request) 
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
//     console.log('Fetched', event.request.url)
// });
self.addEventListener('activate', async(event)=>{
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name=> caches.delete(name))
    )
});
self.addEventListener('fetch', (event) => {
        event.respondWith(cacheFirst(event.request));
});
async function cacheFirst(req) {
    const cached = await caches.match(req)
    return cached ?? await fetch(req).then((e)=>{
        if(e.status < 200) caches.match('offline.html');
    }).catch((e)=>caches.match('offline.html'))
}

