import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [state, setState] = useState(0);
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div>
      <div>{state}</div>
      <input type="text" ref={input} />
      <button onClick={() => setState((state) => state + 1)}>click</button>
    </div>
  );
}

export default UseRef;
