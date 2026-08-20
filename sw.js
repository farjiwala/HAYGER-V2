const CACHE_NAME="hayger-ultra-v4";
const APP_SHELL=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(async()=>{
        // First install activates immediately; later updates wait for the user.
        const clients=await self.clients.matchAll({type:"window",includeUncontrolled:true});
        if(!clients.length) return self.skipWaiting();
      })
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(k=>k.startsWith("hayger-")&&k!==CACHE_NAME).map(k=>caches.delete(k))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;

  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          if(response.ok) caches.open(CACHE_NAME).then(cache=>cache.put(event.request,response.clone()));
          return response;
        })
        .catch(()=>caches.match("./index.html"))
    );
  }else{
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          if(response.ok&&response.type!=="opaque"){
            caches.open(CACHE_NAME).then(cache=>cache.put(event.request,response.clone()));
          }
          return response;
        })
        .catch(()=>caches.match(event.request))
    );
  }
});

self.addEventListener("message",event=>{
  if(event.data==="SKIP_WAITING") self.skipWaiting();
});
