import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    margin: "10px",
    textDecoration: "none",
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;
