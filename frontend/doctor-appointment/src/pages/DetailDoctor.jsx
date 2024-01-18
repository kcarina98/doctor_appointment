import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";

export default function DetailDoctor() {
  const [detailDoc, setDetailDoc] = useState(null);
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

  console.log("DetailDoc: ", detailDoc);

  if (!detailDoc) return <Loadingscreen />;
  return (
    <>
      <h1>Doctor</h1>
      <section>
        {detailDoc.image && (
          <img
            src={import.meta.env.VITE_BACKEND + "/" + detailDoc.image}
            alt="Profilbild"
          />
        )}

        <div>
          <h2>{detailDoc.name}</h2>
          <p>{detailDoc.specification}</p>
          <p>{detailDoc.experience} Years Experience</p>
          <p></p>
          <p>About Doctor:</p>
          <p>{detailDoc.description}</p>
          <div>
            {/* <button onClick={deleteBoot}>BOOT LÖSCHEN</button>
              <Link to={`/edit/${id}`}>BOOT BEARBEITEN</Link> */}
            <Link to="/docs">zurück</Link>
          </div>
        </div>
      </section>
    </>
  );
}
