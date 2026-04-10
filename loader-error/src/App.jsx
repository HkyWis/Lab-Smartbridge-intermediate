import { useState } from "react";
import Loader from "./components/Loader";
import ErrorView from "./components/ErrorView";
import ProfileCard from "./components/ProfileCard";

// Mock API
const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          name: "Hengky",
          email: "hengky@email.com",
        });
      } else {
        reject("Failed to retrieve data");
      }
    }, 2000);
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    setIsLoading(true);
    setError(null);

    fetchMockData()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  // Conditional rendering
  if (isLoading) return <Loader />;
  if (error) return <ErrorView message={error} onRetry={handleFetch} />;
  if (data) return <ProfileCard data={data} />;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mock API Demo</h1>
      <button onClick={handleFetch}>Fetch Data</button>
    </div>
  );
}

export default App;