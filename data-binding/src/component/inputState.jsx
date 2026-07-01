

import { useState } from "react";

function InputState() {
  const [name, setName] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Name: {name}</h2>
    </div>
  );
}

export default InputState