import "./App.css";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import { useEffect, useState } from "react";

type Demo = Database["public"]["Tables"]["test-demo"]["Row"];

export const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_TOKEN);

function App() {
  const [data, setData] = useState<Demo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("test-demo").select("*");

      if (error) {
        setError(error.message);
        return;
      }

      setData(data);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Meine Supabase-Daten</h1>

      {error && <p>Fehler: {error}</p>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
