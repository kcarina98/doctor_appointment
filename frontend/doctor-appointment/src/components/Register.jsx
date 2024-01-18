import "./css/LoginRegister.css";

export default function Register() {
  async function register(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/docs/", {
      method: "POST",
      body: form,
    });
  }

  return (
    <section className="login-register">
      <div className="login-register-box">
        <form onSubmit={register}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">specification</label>
          <select name="specification">
            <option value="Hausarzt">Hausarzt</option>
            <option value="Gynägologie">Gynägologie</option>
            <option value="HNO">HNO</option>
            <option value="Orthopädie">Orthopädie</option>
            <option value="Zahnarzt">Hausarzt</option>
          </select>
          <label htmlFor="">Experience in years</label>
          <input type="number" name="experience" />
          <label htmlFor="">email</label>
          <input type="email" name="email" required />
          <label htmlFor="">description</label>
          <input type="text" name="description" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" required />
          <label htmlFor="">Picture</label>
          <input type="file" name="image" />
          <input className="button" type="submit" value="Registrieren" />
        </form>
      </div>
    </section>
  );
}
