import { useMemo, useState } from "react";

function testMemo(num: number) {
  console.log("MemoTest -> Rechne...");
  let result = 0;

  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }

  return result;
}

function InputField() {
  const [text, setText] = useState("");
  console.log("InputField -> Render");

  return <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tippe hier" />;
}

function MemoTest() {
  const [count, setCount] = useState(0);

  console.log("MemoTest -> Render");

  const value = useMemo(() => {
    console.log("MemoTest -> useMemo");
    return testMemo(count);
  }, [count]);
  console.log("after memo ");

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={() => setCount(count + 1)}>+ Count</button>

      <InputField />
    </div>
  );
}

export default MemoTest;
