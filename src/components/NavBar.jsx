// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/directors" className={({ isActive }) => (isActive ? "active" : "")}>
          Directors
        </NavLink>
        <NavLink to="/actors" className={({ isActive }) => (isActive ? "active" : "")}>
          Actors
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;