import { Router } from "../../deps.ts";
import { postMessage } from "../controllers/messageController.ts";
import { insertMessage } from "../lib/supabaseClient.ts";
import { serveFile } from "https://deno.land/std@0.204.0/http/file_server.ts";

const router = new Router();

// Ruta para ver el formulario (index.html)
router.get("/", async (ctx) => {
  const file = await serveFile(
    new Request(ctx.request.url.href),
    `${Deno.cwd()}/src/views/index.html`
  );

  ctx.response.status = file.status;
  ctx.response.headers = file.headers;
  ctx.response.body = file.body;
});


// Ruta API (JSON)
router.post("/api/messages", postMessage);

// Ruta HTML (formulario)
router.post("/enviar", async (ctx) => {
  const body = await ctx.request.body({ type: "form" }).value;

  const data = {
    author: body.get("author")?.trim() || null,
    place: body.get("place")?.trim() || null,
    date: body.get("date") || null,
    content: body.get("content")?.trim() || null,
    signature: body.get("signature")?.trim() || null,
  };

  // Validación de campos obligatorios
  if (!data.author || !data.date || !data.content) {
    ctx.response.status = 400;
    ctx.response.body = "Faltan campos obligatorios.";
    return;
  }

  const { status } = await insertMessage(data);

  ctx.response.status = status;
  ctx.response.body = status === 201
    ? "Gracias por tu carta 💖"
    : "Ocurrió un error al enviarla.";
});

export default router;
