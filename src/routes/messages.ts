import { Router } from "../../deps.ts";
import { postMessage } from "../controllers/messageController.ts";
import { insertMessage } from "../lib/supabaseClient.ts";

const router = new Router();

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
