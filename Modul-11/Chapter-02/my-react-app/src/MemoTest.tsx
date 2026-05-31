import { useMemo, useState } from "react";
console.log("COMPONENT RENDER");
function MemoTest() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function testMemo(num: number) {
    console.log("Rechne...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  }

  const value = useMemo(() => {
    console.log("memo wird ausgeführt");

    return testMemo(count);
  }, [count]);

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={() => setCount(count + 1)}>+ Count</button>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tippe hier" />
    </div>
  );
}

export default MemoTest;
