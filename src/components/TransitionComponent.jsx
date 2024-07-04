import React, { useState, useTransition } from "react";
import { useTitle } from "../hooks/CostomHooks";

const numbers = (num = 10) => {
  const myArray = [];
  for (let index = num; index > 0; index--) {
    myArray.push(index);
  }
  return myArray;
};

function TransitionComponent() {
  useTitle("Transition");

  const [num, setNum] = useState(numbers());
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    setValue(e.target.value);
    startTransition(() => setNum(numbers(e.target.value)));
  };

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      {isPending ? <p>Loading...</p> : num.map((i) => <p key={i}>{i}</p>)}
    </div>
  );
}

export default TransitionComponent;
