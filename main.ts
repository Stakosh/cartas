import { Application, Router } from "./deps.ts";
import * as dotenv from "./deps.ts";

//carga las variables desde .env
await dotenv.dotenv.load(); // así funciona si usas `export * as dotenv`

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "¡Hola desde Cartitas! 💌";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor corriendo en http://localhost:8000");
await app.listen({ port: 8000 });
