import { dotenv } from "../../deps.ts";
await dotenv.load();


const DETA_KEY = Deno.env.get("DETA_PROJECT_KEY")!;
const baseUrl = "https://database.deta.sh/v1/<tu_project_id>/<tu_base_name>"; // Reemplaza los <> por los valores reales
const headers = {
  "Content-Type": "application/json",
  "X-API-Key": DETA_KEY,
};

export async function postMessage(ctx: any) {
  const { content } = await ctx.request.body.value; // cuidado: .value es una función si estás usando Oak v12
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      item: {
        content,
        created_at: new Date().toISOString(),
      },
    }),
  });

  ctx.response.status = res.ok ? 201 : 500;
  ctx.response.body = {
    message: res.ok ? "Mensaje guardado" : "Error al guardar",
  };
}
