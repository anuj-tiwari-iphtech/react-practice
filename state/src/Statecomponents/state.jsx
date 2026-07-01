import { useState } from "react";

function State() {
  const [count, setCount] = useState(11);

  const Increment = () => {
     setCount(count + 1)
  }
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>
        Increment
      </button>
    </>
  );
}

export default State;