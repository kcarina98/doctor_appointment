import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <>
      <Link className="adddoc" to="/login">
        Add Doctor Profile
      </Link>
      <img src="./img/covid-19.png" alt="Bild" />
      <div className="landingpagediv">
        <p>Find your doctor</p>
        <Link to="/docs">➤</Link>
      </div>
      <div className="landingpagediv">
        <p>Speciality</p>
        <Link to="/docs">➤</Link>
      </div>
    </>
  );
}
