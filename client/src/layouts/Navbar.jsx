import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/"
        className="nav-link"
      >
        Users
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/add-user"
        className="nav-link"
      >
        Add User
      </NavLink>
    </nav>
  );
};

export default Navbar;
