import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/context";

import style from "./css/Loadingscreen.module.css";

const Loadingscreen = () => {
  const { setLoading } = useContext(LoadingContext);

  //* soll 2s angezeigt werden
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section className={style.loading}>
      <p>Loading....</p>
    </section>
  );
};

export default Loadingscreen;
