import { useState, useEffect } from "react";

function App() {
  // Step 3.2: Initialize State
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");

  // Step 4.2 & 4.3: useEffect with dependency
  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log("App pertama kali dijalankan");
  }, []);

  // Event handler
  const increment = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    if (name == "Guest"){
      setName("Hengky");
    } else{
      setName("Guest")
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Step 2.2: UI Structure */}
      <h1>React Hooks Demo</h1>

      {/* Step 5.1: Connect State ke UI */}
      <h2>Halo, {name}</h2>
      <h3>Counter: {count}</h3>

      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Tambah Count
        </button>

        <button onClick={changeName}>
          Ganti Nama
        </button>
      </div>
    </div>
  );
}

export default App;
