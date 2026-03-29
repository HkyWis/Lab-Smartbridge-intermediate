import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  // Step 3.2: Data from parent
  const users = [
    { name: "Hengky", email: "hengky@gmail.com" },
    { name: "Rahul", email: "rahul@gmail.com" },
    { name: "Dharam", email: "dharam@gmail.com" },
  ];

  return (
    <div>
      <Header title="My React App" />

      <Container users={users} />
    </div>
  );
}

export default App;
