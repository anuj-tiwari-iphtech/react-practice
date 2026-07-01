
import { useState } from "react";

function LivePreview() {
  const [message, setMessage] = useState("")

  return (
    <div>
      <h2>Live Preview</h2>

      <textarea
        rows="5"
        cols="30"
        placeholder="Type something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <hr />

      <h3>Your Message</h3>

      <p>{message}</p>
    </div>
  );
}

export default LivePreview