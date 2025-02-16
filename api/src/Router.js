const RoutersList = [
    {
        path: '/',
        hander: './sql/index.js'
    },
    {
        path: '/sql',
        handler: './sql/index.js'
    },
    {
        path: '/img',
        handler: './img/index.js'
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
            const handler = await import(router.handler);
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