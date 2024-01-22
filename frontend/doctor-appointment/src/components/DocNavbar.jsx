import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function DocNavbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkmode = () => {
    setTheme((mode) => !mode);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
      <NavLink to="/profil">Profil</NavLink>
      <button onClick={toggleDarkmode}>Darkmode</button>
    </nav>
  );
}
