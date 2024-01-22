import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loadingscreen from "./Loadingscreen";
import { UserContext } from "../context/context";

export default function Protector() {
  //- authorized = Token wurde im Backend geprüft und stimmt überein
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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
  return (
    <UserContext.Provider value={{ user }}>
      <Outlet />
    </UserContext.Provider>
  );
}
