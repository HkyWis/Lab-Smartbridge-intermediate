import Welcome from "./welcome";
import UserCard from "./usercard";

function App() {
  return (
    <div>
      <Welcome />

      <h1>User List</h1>

      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />
    </div>
  );
}

export default App;
