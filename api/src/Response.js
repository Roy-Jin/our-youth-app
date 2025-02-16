// 新增响应头配置
const defaultHeaders = {
    "Content-Type": "application/json"
};

// 新增 CORS 响应头配置
const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type, X-API-Key"
};

const myResponse = (body, options) => {
    const _OPTIONS = {
        status: 200,
        headers: {
            ...defaultHeaders,
            ...CORS_HEADERS
        },
        ...options
    }
    return new Response(body, _OPTIONS);
};

export default myResponse;