// src/lib/supabaseClient.ts
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY = Deno.env.get("SUPABASE_ANON_KEY");

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ SUPABASE_URL o SUPABASE_ANON_KEY no están definidos.");
  throw new Error("Faltan variables de entorno necesarias para conectar con Supabase.");
}

export async function insertMessage(data: Record<string, any>) {
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
  return { status: response.status, data: result };
}
