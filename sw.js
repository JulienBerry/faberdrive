const C="faberdrive-v3",A=["./","index.html","styles.css","app.js","manifest.webmanifest","icon.svg"];self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));self.addEventListener("fetch",e=>e.request.method==="GET"&&e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match("./")))));



