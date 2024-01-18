import "./css/LoginRegister.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const user = {
      email: e.target.email,
      password: e.target.password,
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND + "/api/auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      }
    );
    if (response.ok) {
      navigate("/appointments");
    }
  }

  return (
    <section className="login-register">
      <div className="login-register-box">
        <form onSubmit={login}>
          <label htmlFor="">Mail</label>
          <input type="email" name="email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <input className="button" type="submit" value="Log In" />
        </form>
      </div>
    </section>
  );
}
