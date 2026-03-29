import UserCard from "./UserCard";

function Container(props) {
  return (
    <div className="container">
      <h2>User List</h2>

      {props.users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default Container;
