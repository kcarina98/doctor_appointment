import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Landingpage() {
  return (
    <section className="landingpage">
      <Navbar />
      <Link className="loginbutton button" to="/login">
        Log In
      </Link>
      <img className="landingimg" src="./img/covid-19.png" alt="Bild" />
      <div className="landingpagediv">
        <p>Find your doctor</p>
        <Link to="/docs">➤</Link>
      </div>
      <div className="landingpagediv2">
        <p>Speciality</p>
        <Link to="/speciality">➤</Link>
      </div>
    </section>
  );
}
