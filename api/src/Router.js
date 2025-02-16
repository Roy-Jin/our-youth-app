const RoutersList = [
    {
        path: '/',
        handler: await import('./sql/index.js').then(module => module.default)
    },
    {
        path: '/sql',
        handler: await import('./sql/index.js').then(module => module.default)
    },
    {
        path: '/img',
        handler: await import('./img/index.js').then(module => module.default)
    }
]

import myResponse from './Response.js';

// 路由处理函数
async function router(...Params) {
    const [request] = Params;
    const url = new URL(request.url);
    const path = url.pathname;

    try {
        const router = RoutersList.find(item => item.path === path);
        if (router) {
            const handler = router.handler;
            const res = await handler.handleRequest(...Params);
            return myResponse(...res);
        } else {
            return myResponse(
                '404 Not Found! The requested URL was not found on this server.',
                { status: 404, headers: { "Content-Type": "text/plain" } }
            );
        }
    } catch (error) {
        return myResponse(error.message, { status: 500 });
    }
}

export default router;