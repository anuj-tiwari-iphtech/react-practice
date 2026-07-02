// Cclick Counter without re-Render

import { useRef } from "react";

function ClickCounter() {
  const clicks = useRef(0);

  function handleClick() {
    clicks.current++;
    console.log("Clicks:", clicks.current);
  }

  return (
    <button onClick={handleClick}>
      Click Me 
    </button>
  );
}

export default ClickCounter;