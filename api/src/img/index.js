/**
 * ## 处理图片请求
 * @param {Request} request 请求对象
 * @param {Object} env 环境变量
 * @returns {Array} 返回一个数组，第一个元素是响应数据，第二个元素是响应头（可选）
 */
async function handleRequest(request, env) {
    try {
        const DB = env.DB;
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        const table = url.searchParams.get("table");

        if (!id) {
            throw new Error("Photo ID not provided!");
        }

        const sql = `SELECT base64 FROM ${table || env.IMG_TABLE || "imgsdata"} WHERE id = ${id}`
        const stmt = DB.prepare(sql);
        const { results } = await stmt.all();

        if (results.length === 0) {
            throw new Error("The picture does not exist!");
        }

        const { base64 } = results[0];
        const mimeTypeMatch = base64.match(/^data:(image\/[a-zA-Z0-9+-.]+);base64,/);
        const mimeType = mimeTypeMatch && mimeTypeMatch[1];

        const headers = {
            "Content-Type": mimeType || "image/*",
            "Cache-Control": "public, max-age=31536001",
        };

        return [
            base64,
            { headers }
        ]
    } catch (error) {
        return [
            ,
            { status: 404, statusText: error.message }
        ]
    }
}

export default { handleRequest };