// Step 2: Component item 
function ItemCard({ item, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      {/* Step 3: Show data */}
      <span>{item.name}</span>
    {/* Step 4: Delete item */}
      <button
        onClick={() => onDelete(item.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ItemCard;