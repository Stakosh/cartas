// src/lib/supabaseClient.ts

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY = Deno.env.get("SUPABASE_ANON_KEY");

console.log("SUPABASE_URL en runtime:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY (cortada):", SUPABASE_KEY?.slice(0, 10));


if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("❌ Variables de entorno SUPABASE_URL o SUPABASE_ANON_KEY no definidas.");
}

console.log("✅ SUPABASE_URL:", SUPABASE_URL);
console.log("🔐 SUPABASE_ANON_KEY:", SUPABASE_KEY.slice(0, 10));

export async function insertMessage(data: Record<string, any>) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Respuesta Supabase:", response.status, result);

    return { status: response.status, data: result };
  } catch (error) {
    console.error("Error al insertar mensaje:", error);
    return { status: 500, data: { error: "Error interno" } };
  }
}

