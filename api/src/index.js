// 新增 CORS 响应头配置
const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-API-Key"
};

// 处理请求
async function handleRequest(...Params) {
    const [request, env] = Params;
    try {
        const DB = env.DB;
        // 获取 SQL 语句
        let sql, params;
        const url = new URL(request.url);

        // 检查请求方法
        if (request.method === "POST") {
            // 从请求体中获取 SQL 语句（请求体为 JSON 格式）
            const requestBody = await request.json();
            sql = requestBody.sql;
            params = requestBody.params;
        } else if (request.method === "GET") {
            // 从 URL 参数中获取 SQL 语句
            sql = url.searchParams.get("sql") || "";
        } else if (request.method === "OPTIONS") {
            // 处理预检请求 (OPTIONS)
            return new Response(null, {
                status: 204,
                headers: CORS_HEADERS
            });
        }

        // 执行 SQL 语句
        if (!sql) {
            throw new Error("没有提供 SQL 语句");
        }

        let stmt;
        if (params) {
            stmt = DB.prepare(sql).bind(...params);
        } else {
            stmt = DB.prepare(sql);
        }
        const { results } = await stmt.all();

        // 返回结果
        return new Response(
            JSON.stringify(results),
            {
                headers: {
                    "content-type": "application/json",
                    ...CORS_HEADERS // 合并 CORS 头
                }
            }
        );
    } catch (error) {
        // 返回错误信息
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: {
                    "content-type": "application/json",
                    ...CORS_HEADERS // 合并 CORS 头
                }
            }
        );
    }
}

// 导出默认的 Worker 函数
export default {
    async fetch(...Params) {
        return handleRequest(...Params);
    }
};