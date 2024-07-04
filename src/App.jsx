import ChildComponent from "./components/ChildComponent";
import TransitionComponent from "./components/TransitionComponent";
import UseRef from "./components/UseRef";
import { useCallback, useMemo, useState } from "react";

function App() {
  console.log("render App");

  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 500000000; index++) {}
    return counter;
  }, [counter]);

  const clickHandler = useCallback(() => {
    setNumber((number) => number + 1);
  }, [number]);

  return (
    <>
      <h3>useRef</h3>
      <UseRef />
      <h3>useMemo & useCallback</h3>
      <ChildComponent number={number} clickHandler={clickHandler} />
      <span> {slow}</span>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        + app
      </button>
      <br />
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+ child</button>
      <br />
      <h3>useTransition</h3>
      <TransitionComponent />
    </>
  );
}

export default App;
