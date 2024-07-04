import Memo from "./components/Memo";
import UseRef from "./components/UseRef";
import { useMemo, useState } from "react";

function App() {
  console.log("render App");

  const [counnter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 500000000; index++) {}
    return counnter;
  }, [counnter]);

  return (
    <>
      <h3>useRef</h3>
      <UseRef />
      <h3>useMemo</h3>
      <Memo number={number} />
      <span> {slow}</span>
      <button onClick={() => setCounter((counnter) => counnter + 1)}>+</button>
      <br />
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </>
  );
}

export default App;
