// Step 2: Component list 
import ItemCard from "./ItemsCard";

function ItemList({ items, onDelete }) {
  // Step 5: Handle Empty Data
  if (items.length === 0) {
    return <p>Empty Data</p>;
  }

  return (
    <div>
      {/* Step 3: Render list with map */}
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ItemList;