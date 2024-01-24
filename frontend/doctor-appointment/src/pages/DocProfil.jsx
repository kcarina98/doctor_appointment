import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";
import "./css/Detailpage.css";
import DocNavbar from "../components/DocNavbar";

export default function DocProfil() {
  const [docProfil, setDocProfil] = useState([]);

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

  console.log(docProfil.user);

  //- User löschen
  async function deleteDoc() {
    console.log("Doc löschen");
    const response = await fetch(
      import.meta.env.VITE_BACKEND + "/api/user/actual",
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("hat geklappt");
    }
  }

  if (!docProfil.user) return <Loadingscreen />;
  return (
    <>
      <DocNavbar />
      <section className="detailpage">
        {docProfil.user.image && (
          <div className="image-div">
            <img
              src={import.meta.env.VITE_BACKEND + "/" + docProfil.user.image}
              alt="Profilbild"
            />
          </div>
        )}

        <h2>{docProfil.user.name}</h2>
        <h3>{docProfil.user.specification}</h3>
        <div className="dreiboxen">
          <p>1000+ Patienten</p>
          <p>{docProfil.user.experience} Years Experience</p>
          <p>4 ⭐️</p>
        </div>

        <div className="description">
          <p>About Doctor:</p>
          <p>{docProfil.user.description}</p>
        </div>

        <div>
          <Link className="button" to="/edit">
            edit profil
          </Link>
          <button onClick={deleteDoc}>delete</button>
        </div>
      </section>
    </>
  );
}
