import "./App.css";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import { useState } from "react";

type Demo = Database["public"]["Tables"]["test-demo"]["Row"];
type Object = { userId: number } | null;

export const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_TOKEN);

function App() {
  const [data, setData] = useState<Demo[]>([]);

  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    const { data, error } = await supabase.from("test-demo").select("*");

    if (error) {
      setError(error.message);
      return;
    }

    setData(data);

    console.log(data);
  }

  async function insertData() {
    const { data, error } = await supabase.from("test-demo").insert({ name: "hallo", TestArray: ["ABC"], TestObject: { userId: 12345 } });
    if (error) {
      console.log(error);
    }
    fetchData();
    console.log(data);
  }

  async function deleteData() {
    const { data, error } = await supabase.from("test-demo").delete().eq("name", "hallo");
    if (error) {
      console.log(error);
    }
    fetchData();
    console.log(data);
  }

  async function updateData() {
    const { data, error } = await supabase.from("test-demo").update({ name: "test" }).eq("name", "hallo");
    if (error) {
      console.log(error);
    }
    fetchData();
    console.log(data);
  }

  async function upsertData() {
    const { data, error } = await supabase.from("test-demo").upsert({ id: 16, name: "ABC" });
    if (error) {
      console.log(error);
    }
    fetchData();
    console.log(data);
  }

  return (
    <div>
      <button onClick={insertData}>Insert</button>
      <button onClick={fetchData}>fetch</button>
      <button onClick={deleteData}>delete</button>
      <button onClick={updateData}>update</button>
      <button onClick={upsertData}>upsert</button>

      <h1>Meine Supabase-Daten</h1>

      {error && <p>Fehler: {error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Created At</th>
            <th>Name</th>
            <th>Age</th>
            <th>TestArray</th>
            <th>TestObject</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.created_at}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.TestArray?.length}</td>
              <td>
                {typeof item.TestObject === "object" && item.TestObject !== null && !Array.isArray(item.TestObject)
                  ? String(item.TestObject.userId ?? "-")
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
