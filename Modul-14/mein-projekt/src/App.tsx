import { createClient } from "@supabase/supabase-js";

import { Database } from "./types/database.types";

const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_TOKEN);
function App() {
  fetchData();
  async function fetchData() {
    const { data, error } = await supabase.from("demo").select("*").filter("Name", "eq", "hallo");
    if (error) {
      console.log(error);
    }
    console.log(data);
    return data;
  }
  return (
    <>
      <p>hallo</p>
    </>
  );
}

export default App;
