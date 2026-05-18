import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logoe"></h2>

      <nav className="nav">
        <NavLink to="inicio" className="link">
          Home
        </NavLink>

        <NavLink to="personajes" className="link">
          Characters
        </NavLink>
        <NavLink to="especies" className="link">
          Filter
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
