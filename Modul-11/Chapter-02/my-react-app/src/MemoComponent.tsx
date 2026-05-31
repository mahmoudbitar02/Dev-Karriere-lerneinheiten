import { useEffect, useMemo, useState } from "react";

type MemoComponentProps = {
  filterInput: string[];
  filterOption: number;
};

function MemoComponent({ filterInput, filterOption }: MemoComponentProps) {
  const [input, SetInput] = useState(filterInput);
  const [option, setOption] = useState(filterOption);
  const [renderValue, setRenderValue] = useState(0);

  const filteredData = useMemo(() => filterData(input, option), [input, option]);

  useEffect(() => {
    console.log(filteredData, filterInput, filterOption, input, option);

    return () => {
      console.log("Cleaning up");
    };
  });

  function handleButtonClick() {
    if (renderValue > 5) {
      setOption(renderValue);
    }
    console.log("Clicking", renderValue);
    setRenderValue(renderValue + 1);
  }

  function filterData(data: string[], option: number) {
    // for (let i = 0; i < 999999999; i++) {}
    console.log("FILTERING DATA");
    if (option < 5) {
      return data;
    } else {
      return [];
    }
  }
  return (
    <>
      {filteredData}
      <button onClick={handleButtonClick}>Click Button</button>
    </>
  );
}

export default MemoComponent;
