// src/lib/supabaseClient.ts
import { dotenv } from "../../deps.ts";
await dotenv.load();

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

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
