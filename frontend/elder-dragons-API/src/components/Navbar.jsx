import "../styles/Navbar.css";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/home">Principal</NavLink>
        </li>
        <li>
          <NavLink to="/register-monster">Registrar Dragón</NavLink>
        </li>
        <li>
          <NavLink to="/update-monster">Actualizar Dragón</NavLink>
        </li>
      </ul>
    </nav>
  );
};
