// 新增 CORS 响应头配置
const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-API-Key"
};

async function handleRequest(...Params) {
    const [request, env] = Params;
    const method = request.method;
    try {
        if (method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: CORS_HEADERS
            });
        } else {
            const DB = env.DB;
            const url = new URL(request.url);
            const id = url.searchParams.get("id");
            const table = url.searchParams.get("table");

            if (!id) {
                throw new Error("Photo ID not provided!");
            }

            const sql = "SELECT base64 FROM ? WHERE id = ?";
            const stmt = DB.prepare(sql).bind(table || env.IMG_TABLE || "imgsdata", id);
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
                ...CORS_HEADERS
            };

            return new Response(
                base64,
                { status: 200, headers }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: {
                    "content-type": "application/json",
                    ...CORS_HEADERS
                }
            }
        );
    }
}

export default {
    async fetch(...Params) {
        return handleRequest(...Params);
    }
};