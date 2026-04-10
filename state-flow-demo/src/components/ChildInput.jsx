import { useState } from "react";

function ChildInput({ onUpdate }) {
  const [input, setInput] = useState("");

  return (
    <div style={{ marginBottom: "15px" }}>
      <h3>Input Component</h3>

      <input
        type="text"
        placeholder="Type Message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => onUpdate(input)}>Update</button>
    </div>
  );
}

export default ChildInput;