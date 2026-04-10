import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";

function App() {
  // Subtask 2.2: Fetch Data
  const [data, setData] = useState([]); // Subtask 3.1: Store Data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Subtask 2.1: Choose API
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Subtask 5.2: Conditional Rendering
  return (
    <div>
      <h1>API Data</h1>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <DataList data={data} />}
    </div>
  );
}

export default App;