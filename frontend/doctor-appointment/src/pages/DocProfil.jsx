import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";
import "./css/Detailpage.css";
import DocNavbar from "../components/DocNavbar";

export default function DocProfil() {
  const [docProfil, setDocProfil] = useState([]);

  // useEffect(() => {
  //   fetch(import.meta.env.VITE_BACKEND + "/api/docs/actual")
  //     .then((response) => response.json())
  //     .then((data) => setDocProfil(data));
  // }, []);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/user/actual",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setDocProfil(await response.json());
      }
    }
    getUser();
  }, []);

  if (!docProfil) return <Loadingscreen />;
  return (
    <>
      <DocNavbar />
      <section className="detailpage">
        {docProfil.image && (
          <div className="image-div">
            <img
              src={import.meta.env.VITE_BACKEND + "/" + docProfil.image}
              alt="Profilbild"
            />
          </div>
        )}

        <h2>{docProfil.name}</h2>
        <h3>{docProfil.specification}</h3>
        <div className="dreiboxen">
          <p>1000+ Patienten</p>
          <p>{docProfil.experience} Years Experience</p>
          <p>4 ⭐️</p>
        </div>

        <div className="description">
          <p>About Doctor:</p>
          <p>{docProfil.description}</p>
        </div>

        <div>
          <Link className="button" to="/booking">
            edit profil
          </Link>
          <Link className="button" to="/docs">
            delete
          </Link>
        </div>
      </section>
    </>
  );
}
