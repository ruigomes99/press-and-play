/*
const staticAssets = [
    './',
    './login.html',
    './register.html',
    './alugado.html',
    './amigos.html',
    './campo.html',
    './Conversas.html',
    './Email3.html',
    './entrar-evento.html',
    './Equipa.html',
    './Equipas.html',
    './Favoritos.html',
    './historico.html',
    './pagina-inicial.html',
    './pedidos.html',
    './perfil-outra.html',
    './perfil.html',
    './pesquisa-campos.html',
    './Regras.html',
    './Reservas.html',
    './assets/js/editar_perfil.js',
    './assets/js/FrontOffice.js',
    './assets/js/js-form-validator.js',
     './assets/js/login.js',
     './assets/js/logout.js',
     './assets/js/perfil.js',
     './assets/js/registo.js',
     './controller/alugado.js',
     './controller/amigos.js',
     './controller/campo.js',
     './controller/email3.js',
     './controller/entrar-evento.js',
     './controller/equipa.js',
    './controller/equipas.js',
    './controller/favoritos.js',
    './controller/forgot-password.js',
    './controller/historico.js',
    './controller/pagina-inicial.js',
    './controller/pedidos.js',
    './controller/perfil-outra.js',
    './controller/perfil.js',
    './controller/pesquisa.js',
    './controller/reservas.js',
    './controller/user.controller.js',
    './js/FrontOffice.js',
    './js/registo.js',
    './js/sb-admin-2.js',
    './js/sb-admin-2.min.js'
    ];
    */
const staticAssets = [
]

self.addEventListener('install', async event => {
    const cache = await caches.open('pap-static');
    cache.addAll(staticAssets);
    console.log('install');
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req))
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('pap-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }

}