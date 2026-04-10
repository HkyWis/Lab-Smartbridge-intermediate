// Step 2: Parent Component State
import { useState } from "react";
import ChildInput from "./ChildInput";
import ChildPreview from "./ChildPreview";
import Display from "./Display";

function Parent() {
  // Subtask 2.1: Create Parent State
  const [message, setMessage] = useState("Hello from Parent");

  // Subtask 3.1: Callback Functions
  const updateMessage = (newMsg) => {
    setMessage(newMsg);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>State Flow Demo</h1>

      {/* Subtask 2.2: Pass State as Props */}
      <ChildInput onUpdate={updateMessage} />

      {/* Subtask 4.1: Multiple Child Components */}
      <ChildPreview message={message} />
      

      {/* Step 4.2: Display component */}
      <Display message={message} />
    </div>
  );
}

export default Parent;