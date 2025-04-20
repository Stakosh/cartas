import { Application } from "./deps.ts";
import router from "./src/routes/messages.ts";

// Solo para local:
// import { load } from "./deps.ts";
// await load();

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor corriendo en http://localhost:8000");
await app.listen({ port: 8000 });
