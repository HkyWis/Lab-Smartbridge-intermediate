// Step 2: UI 
function Header({ onAdd }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Refactoring Demo</h1>
      <button onClick={onAdd}>Add Item</button>
    </div>
  );
}

export default Header;