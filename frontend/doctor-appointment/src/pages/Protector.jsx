import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";

export default function Protector() {
  //- authorized = Token wurde im Backend geprüft und stimmt überein
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  //- Abfrage ans Backend, ob Token stimmt
  useEffect(() => {
    async function checkToken() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/check",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setAuthorized(true);
      }
      setLoading(false);
    }
    checkToken();
  }, []);

  //* wenn Autorisierung fehlschlägt und es fertig geladen ist -> zurück auf Login
  if (!authorized && !loading) {
    return <Navigate to={"/login"} />;
  }
  //* wenn es noch lädt
  if (loading) {
    return <Loadingscreen />;
  }
  //* wenn Autorisierung klappt
  return <Outlet />;
}
