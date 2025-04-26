# Cartitas 💌

Este es un proyecto personal creado con el propósito de aprender y practicar TS y el uso de herramientas modernas para el desarrollo web.

## 📌 Objetivo del proyecto

Crear una página web donde cualquier persona pueda ingresar y dejar una carta anónima, como si fuera un mensaje escrito a mano.  
La idea es que **solo el creador de la página pueda leerlas**, fomentando una experiencia íntima, privada y significativa.

## 🛠️ Tecnologías utilizadas

- **Deno**: Para el backend y el servidor web.
- **Oak**: Framework middleware para rutas y control de peticiones HTTP en Deno.
- **Supabase**: Base de datos en la nube para almacenar las cartas.
- **TypeScript**: Lenguaje principal del backend.
- **HTML**: Usado para la interfaz del formulario.
- **Git & GitHub**: Para control de versiones.
- **Deno Deploy**: Para desplegar el backend (recomendado).
- **Netlify (próximamente)**: Para desplegar el frontend.

## 🚀 Estado del proyecto

🟢 Conexión establecida con Supabase  
🟢 Se reciben cartas desde un formulario web  
🟢 Cartas se almacenan correctamente en la base de datos  
🔜 Próximamente: Interfaz para visualización privada por parte del creador (no creo, solo estoy practicando TS y no me gustó mucho)

## ⚙️ Cómo ejecutar localmente (este proyecto está diseñado para funcionar en Deno Deploy, puede presentar errores localmente)

Asegúrate de tener [Deno instalado](https://deno.land/manual/getting_started/installation).

Luego, en la raíz del proyecto, ejecuta:

```bash
deno run --allow-net --allow-read --allow-env main.ts
```

📌 **Importante**: Asegúrate de tener un archivo `.env` con las siguientes variables configuradas:

```
SUPABASE_URL=tu_url_de_supabase
SUPABASE_ANON_KEY=tu_clave_publica
```

---

This is a personal project created to learn and practice the use of modern tools for web development.

## 📌 Project Goal

Create a website where anyone can enter and leave an anonymous letter, like a handwritten message.  
The idea is that **only the page creator can read them**, encouraging a private and meaningful experience.

## 🛠️ Tech Stack

- **Deno**: For backend and server.
- **Oak**: Middleware framework for routing and HTTP control in Deno.
- **Supabase**: Cloud database to store letters.
- **TypeScript**: Main language used in the backend.
- **HTML**: Used for the form interface.
- **Git & GitHub**: For version control.
- **Deno Deploy**: Recommended deployment for the backend.
- **Netlify (coming soon)**: For frontend deployment.

## 🚀 Project Status

🟢 Supabase connection established  
🟢 Letters are received via a web form  
🟢 Letters are successfully stored in the database  
🔜 Coming soon: Private viewing interface (not really planned — just practicing TS and didn’t love it)

## ⚙️ How to run locally (built for Deno Deploy — local execution may fail)

Make sure you have [Deno installed](https://deno.land/manual/getting_started/installation).

Then, at the root of the project, run:

```bash
deno run --allow-net --allow-read --allow-env main.ts
```

📌 **Important**: You must have a `.env` file with the following variables configured:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_public_key
```

---

This project is part of my learning journey as a developer.  
Thanks for stopping by! 🌟
