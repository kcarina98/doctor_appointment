import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkmode = () => {
    setTheme((mode) => !mode);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/docs">Docs</NavLink>
      <button onClick={toggleDarkmode}>Darkmode</button>
    </nav>
  );
}
