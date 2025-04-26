# Cartitas / Little Letters

## Español

**Cartitas** es una aplicación web desplegada en Deno Deploy que permite a las personas dejarle cartas (mensajes) de forma segura y privada. Solo la usuaria (Javiera Soto) puede leer los mensajes.

### Demo en producción

➡️ https://cartitas-para-javs.deno.dev/

### Descripción

`Cartitas` es una API y frontend construidos en Deno que utilizan Supabase como base de datos para almacenar mensajes enviados por usuarios. Cada carta incluye:

- **Autor**
- **Fecha** (ingresada por quien escribe)
- **Lugar**
- **Contenido** del mensaje

El objetivo es que solo Javiera Soto pueda consultar y leer las cartas.

### Características

- **API REST** con rutas para enviar y obtener mensajes.
- **Frontend** ligero en HTML/JavaScript puro.
- **Despliegue** continuo en Deno Deploy.
- **Base de datos** gestionada en Supabase.

### Tecnologías

- Deno (TypeScript)  
- Supabase  
- HTML, CSS y JavaScript puro

### Variables de entorno

Define estas variables en Deno Deploy o en un archivo `.env` si ejecutas localmente:

```env
SUPABASE_URL=<tu_supabase_url>
SUPABASE_ANON_KEY=<tu_supabase_anon_key>
```

### Despliegue en Deno Deploy

1. Vincula el repositorio con Deno Deploy.
2. Configura las variables de entorno en la interfaz.
3. Cada push a la rama principal disparará un nuevo despliegue.

### Desarrollo local

> ⚠️ **Nota:** El código está optimizado para Deno Deploy. Para ejecutar localmente:

1. Instala Deno:
   ```bash
   curl -fsSL https://deno.land/install.sh | sh
   ```
2. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```
3. Crea un archivo `.env` en la raíz con las variables:
   ```env
   SUPABASE_URL=<tu_supabase_url>
   SUPABASE_ANON_KEY=<tu_supabase_anon_key>
   ```
4. Reemplaza la carga de variables en `main.ts` para usar `deno-dotenv`:
   ```ts
   import { config } from "https://deno.land/x/dotenv/mod.ts";
   const env = config();
   const SUPABASE_URL = env.SUPABASE_URL;
   const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY;
   ```
5. Ejecuta la aplicación:
   ```bash
   deno run --allow-env --allow-net main.ts
   ```
6. Abre `index.html` en el navegador y apunta el frontend a `http://localhost:8000`.

### Uso

1. En el formulario del frontend, completa Autor, Fecha, Lugar y Contenido.
2. Haz clic en **Enviar** para guardar la carta en Supabase.
3. Solo Javiera Soto podrá ver las cartas con la ruta protegida.

### Contribuciones

¡Contribuciones bienvenidas! Abre un issue o un pull request describiendo las mejoras.

### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## English

**Little Letters** is a web application deployed on Deno Deploy that allows anyone to send private letters (messages) securely. Only the owner (Javiera Soto) can read the messages.

### Live Demo

➡️ https://cartitas-para-javs.deno.dev/

### Description

`Little Letters` consists of a Deno-based API and a simple frontend that use Supabase to store messages. Each letter contains:

- **Author**  
- **Date** (entered by the sender)  
- **Location**  
- **Content** of the message

Only Javiera Soto has permission to query and read the letters.

### Features

- **REST API** with endpoints to send and fetch messages.  
- **Lightweight frontend** in pure HTML/JavaScript.  
- **Automatic deployment** on Deno Deploy.  
- **Database** managed by Supabase.

### Tech Stack

- Deno (TypeScript)  
- Supabase  
- HTML, CSS, and vanilla JavaScript

### Environment Variables

Set these in Deno Deploy or in a local `.env` file:

```env
SUPABASE_URL=<your_supabase_url>
SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

### Deno Deploy Setup

1. Link the repository to Deno Deploy.  
2. Configure environment variables in the Deno Deploy dashboard.  
3. Every push to main triggers a new deploy.

### Local Development

> ⚠️ **Note:** The code is tailored for Deno Deploy. To run locally:

1. Install Deno:
   ```bash
   curl -fsSL https://deno.land/install.sh | sh
   ```
2. Clone the repo:
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPO_NAME>
   ```
3. Create a `.env` file at the project root with:
   ```env
   SUPABASE_URL=<your_supabase_url>
   SUPABASE_ANON_KEY=<your_supabase_anon_key>
   ```
4. Modify `main.ts` to load env vars via `deno-dotenv`:
   ```ts
   import { config } from "https://deno.land/x/dotenv/mod.ts";
   const env = config();
   const SUPABASE_URL = env.SUPABASE_URL;
   const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY;
   ```
5. Run the app:
   ```bash
   deno run --allow-env --allow-net main.ts
   ```
6. Open `index.html` and point the frontend to `http://localhost:8000`.

### Usage

1. Fill in Author, Date, Location, and Content in the frontend form.  
2. Click **Send** to store the letter in Supabase.  
3. Only Javiera Soto can retrieve letters via the protected endpoint.

### Contributing

Contributions welcome! Please open an issue or PR with your suggested improvements.

### License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

