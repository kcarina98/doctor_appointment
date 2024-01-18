import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";
import styles from "./LoginRegister.module.css";

export default function LoginRegister() {
  const [toggle, setToggle] = useState(true);

  const toggleFunction = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <>
      <div className={styles.buttondiv}>
        <button id={toggle ? `${styles.black}` : null} onClick={toggleFunction}>
          Log In
        </button>

        <button onClick={toggleFunction} id={toggle ? null : `${styles.black}`}>
          Register
        </button>
      </div>
      {toggle ? <Login /> : <Register />}
    </>
  );
}
