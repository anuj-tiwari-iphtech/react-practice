

import { useRef } from "react";

function AutoFocus() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>
    </>
  );
}

export default AutoFocus;