import { Application } from "./deps.ts";
import * as dotenv from "./deps.ts";
import router from "./src/routes/messages.ts"; // Importas todas tus rutas aquí

// Carga de variables de entorno
await dotenv.dotenv.load();

const app = new Application();

// Usa todas las rutas definidas en src/routes/messages.ts
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor corriendo en http://localhost:8000");
await app.listen({ port: 8000 });
