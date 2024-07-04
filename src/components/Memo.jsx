import React, { memo } from "react";

function Memo({ number }) {
  console.log("render Memo");

  return <div>Memo : {number}</div>;
}

export default memo(Memo);
