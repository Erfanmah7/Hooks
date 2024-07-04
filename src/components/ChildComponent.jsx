import React, { memo } from "react";
import { useLocalStorage, useTitle } from "../hooks/CostomHooks";

function ChildComponent({ number, clickHandler }) {
  console.log("render ChildComponent");
  const [name, setName] = useLocalStorage("name", "");
  useTitle("ChildComponent");

  return (
    <div>
      <p>Memo : {number}</p>
      <button onClick={clickHandler}>+ child</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default memo(ChildComponent);
