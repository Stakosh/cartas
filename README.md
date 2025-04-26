## Cartitas / Little Letters

### Español

**Cartitas** es una aplicación creada por mí para usar TypeScript, Deno y Supabase. Las cartas se envían a la página mencionada y solo yo puedo leerlas.

#### Demo en producción

➡️ https://cartitas-para-javs.deno.dev/

#### Descripción

`Cartitas` es una aplicación diseñada para desplegarse online y conectarse a una base de datos en la nube (en este caso Deno Deploy y Supabase). Su frontend en HTML/JavaScript envía mensajes al servicio en Deno, que los guarda en Supabase.

Los mensajes pueden ser enviados por cualquier usuario, pero únicamente el creador o administrador de la base de datos puede leerlos. Aún no se ha implementado una página de lectura de mensajes.

#### Características

- **Frontend** ligero en HTML/CSS/JavaScript puro.
- **Servicio en Deno** que recibe las peticiones del formulario y almacena los datos en Supabase.
- **Despliegue** continuo en Deno Deploy.
- **Base de datos** gestionada en Supabase.

#### Tecnologías

- Deno (TypeScript)
- Supabase
- HTML, CSS y JavaScript puro

#### Variables de entorno

Define estas variables en Deno Deploy o en un archivo `.env` si ejecutas localmente:

```env
SUPABASE_URL=<tu_supabase_url>
SUPABASE_ANON_KEY=<tu_supabase_anon_key>
```

#### Despliegue en Deno Deploy

1. Vincula el repositorio con Deno Deploy.
2. Configura las variables de entorno en la interfaz con tu Supabase URL y ANON KEY.
3. Cada push a la rama principal disparará un nuevo despliegue.

#### Desarrollo local

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
4. Modifica `main.ts` para usar `deno-dotenv`:
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

#### Uso

1. Completa Autor, Fecha, Lugar y Contenido en el formulario del frontend.
2. Haz clic en **Enviar** para guardar la carta en Supabase.
3. Solo Javiera Soto podrá ver las cartas a través de la ruta protegida.

#### Contribuciones

¡Contribuciones bienvenidas! Abre un issue o un pull request describiendo las mejoras o nuevos templates.

#### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

### English

**Little Letters** is an application I created using TypeScript, Deno, and Supabase. Messages are sent to the demo page above, and only I can read them.

#### Live Demo

➡️ https://cartitas-para-javs.deno.dev/

#### Description

`Little Letters` consists of a lightweight frontend in HTML/JavaScript and a Deno service that exposes endpoints to receive form data and store it in Supabase.

Each letter includes:

- **Author**
- **Date** (entered by the sender)
- **Location**
- **Content** of the message

Only Javiera Soto has permission to query and read the stored letters.

> This repository can be used as a **template**: create your own database in Supabase, set up the environment variables with your credentials, and deploy on Deno Deploy to make it work.

#### Features

- **Lightweight frontend** in pure HTML/CSS/JavaScript.
- **Deno service** to handle requests from the form and store data in Supabase.
- **Continuous deployment** on Deno Deploy.
- **Database** managed by Supabase.

#### Tech Stack

- Deno (TypeScript)
- Supabase
- HTML, CSS, and vanilla JavaScript

#### Environment Variables

Set these in Deno Deploy or in a local `.env` file:

```env
SUPABASE_URL=<your_supabase_url>
SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

#### Deno Deploy Setup

1. Link the repository to Deno Deploy.
2. Configure environment variables in the Deno Deploy dashboard with your Supabase details.
3. Every push to main triggers a new deploy.

#### Local Development

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

#### Usage

1. Fill in Author, Date, Location, and Content in the frontend form.
2. Click **Send** to store the letter in Supabase.

#### Contributing

Contributions welcome! Feel free to open an issue or PR for improvements or templates.

#### License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

