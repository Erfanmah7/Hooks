import React, { memo } from "react";

function ChildComponent({ number, clickHandler }) {
  console.log("render ChildComponent");

  return (
    <div>
      <p>Memo : {number}</p>
      <button onClick={clickHandler}>+ child</button>
    </div>
  );
}

export default memo(ChildComponent);
