import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditDoc() {
  const [detailDoc, setDetailDoc] = useState(null);

  async function updateDoc(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/user/actual", {
      method: "PUT",
      credentials: "include",
      body: form,
    });
  }

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/user/actual",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setDetailDoc(await response.json());
      }
    }
    getUser();
  }, []);

  console.log("DetailDoc: ", detailDoc);

  if (detailDoc) {
    return (
      <>
        <h1 className="form-headline">Doctor BEARBEITEN</h1>
        <div className="login-register-box">
          <form onSubmit={updateDoc}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
            <label htmlFor="">specification</label>
            <select name="specification">
              <option value="Hausarzt">Hausarzt</option>
              <option value="Gynägologie">Gynägologie</option>
              <option value="HNO">HNO</option>
              <option value="Orthopädie">Orthopädie</option>
              <option value="Zahnarzt">Zahnarzt</option>
            </select>
            <label htmlFor="">Experience in years</label>
            <input type="number" name="experience" />
            <label htmlFor="">email</label>
            <input type="email" name="email" />
            <label htmlFor="">description</label>
            <input type="text" name="description" />
            <label htmlFor="">Password</label>
            <input type="password" name="password" />
            <label htmlFor="">Picture</label>
            <input type="file" name="image" />
            <input className="button" type="submit" value="Registrieren" />
          </form>
        </div>
      </>
    );
  }
}
