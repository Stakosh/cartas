import { insertMessage } from "../lib/supabaseClient.ts";

export async function postMessage(ctx: any) {
  const { value } = await ctx.request.body({ type: "json" });
  const data = await value;

  // Validar campos requeridos
  if (!data.author || !data.date || !data.content) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Faltan campos obligatorios." };
    return;
  }

  const { status, data: result } = await insertMessage(data);

  ctx.response.status = status;
  ctx.response.body = result;
}
