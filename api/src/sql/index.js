/**
 * ## 处理 SQLite 请求
 * @param {Request} request 请求对象
 * @param {Object} env 环境变量
 * @returns {Array} 返回一个数组，第一个元素是响应数据，第二个元素是响应头（可选）
 */
async function handleRequest(request, env) {
    try {
        const DB = env.DB;
        let sql, params;
        const url = new URL(request.url);

        if (request.method === "POST") {
            const requestBody = await request.json();
            sql = requestBody.sql;
            params = requestBody.params;
        } else if (request.method === "GET") {
            sql = url.searchParams.get("sql") || "";
        }

        if (!sql) {
            throw new Error("No SQLite statement is provided");
        }

        let stmt;
        if (params) {
            stmt = DB.prepare(sql).bind(...params);
        } else {
            stmt = DB.prepare(sql);
        }
        const { results } = await stmt.all();

        return [JSON.stringify(results)]
    } catch (error) {
        return [
            JSON.stringify({ error: error.message }),
            { status: 500 }
        ]
    }
}

export default handleRequest;