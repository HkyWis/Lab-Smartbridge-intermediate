// Step 1: Import React & Components
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemsList";

function App() {
  // Step 2: State Management 
  const [items, setItems] = useState([
    { id: 1, name: "Learm React" },
    { id: 2, name: "Learn Refactoring" },
  ]);

  // Step 3: Function for delete item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Step 3: Function for add item
  const handleAdd = () => {
    const newItem = {
      id: Date.now(), // unique key
      name: "New Item",
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Subtask 3.2: Pass Required Props */}
      <Header onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;