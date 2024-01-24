import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";
import "./css/Detailpage.css";
import Navbar from "../components/Navbar";

export default function DetailDoctor() {
  const [detailDoc, setDetailDoc] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getDoc() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/docs/" + id
      );
      if (response.ok) {
        setDetailDoc(await response.json());
      }
    }
    getDoc();
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/docs/" + id)
      .then((response) => response.json())
      .then((data) => setDetailDoc(data));
  }, []);

  if (!detailDoc) return <Loadingscreen />;
  return (
    <>
      <Navbar />
      <section className="detailpage">
        {detailDoc.image && (
          <div className="image-div">
            <img
              src={import.meta.env.VITE_BACKEND + "/" + detailDoc.image}
              alt="Profilbild"
            />
          </div>
        )}

        <h2>{detailDoc.name}</h2>
        <h3>{detailDoc.specification}</h3>
        <div className="dreiboxen">
          <p>1000+ Patienten</p>
          <p>{detailDoc.experience} Years Experience</p>
          <p>4 ⭐️</p>
        </div>

        <div className="description">
          <p>About Doctor:</p>
          <p>{detailDoc.description}</p>
        </div>

        <div>
          <Link className="button" to={`/booking/${id}`}>
            Set Appointment
          </Link>
          <Link className="button" to="/docs">
            zurück
          </Link>
        </div>
      </section>
    </>
  );
}
