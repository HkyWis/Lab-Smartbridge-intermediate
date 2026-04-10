import { useState } from "react";
import "./App.css";

function App() {
  // Step 2: Initial Data
  const [items, setItems] = useState(["Learn React", "Doing Task"]);
  const [inputValue, setInputValue] = useState("");

  // Step 4.1: Add item
  const addItem = () => {
    if (inputValue.trim() === "") return; // Step 5.2: Validation input

    setItems([...items, inputValue]);
    setInputValue("");
  };

  // Step 4.2: Remove item
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>Dynamic List React</h2>

      {/* Add item input */}
      <input
        type="text"
        placeholder="Add item..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {/* Step 5.1: If list empty */}
      {items.length === 0 ? (
        <p>Empty List</p>
      ) : (
        <ul>
          {/* Step 3: Render list */}
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => removeItem(index)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;