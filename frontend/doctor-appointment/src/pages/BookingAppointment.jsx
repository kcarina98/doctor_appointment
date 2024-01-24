import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BookingAppointment() {
  const { id } = useParams();

  async function createAppointment(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const doctor = id;
    await fetch(import.meta.env.VITE_BACKEND + "/api/appointments/", {
      method: "POST",
      body: form,
      doctor,
    });
  }

  return (
    <main>
      <Navbar />
      <p>New Appointment</p>

      <form onSubmit={createAppointment}>
        {/* //* id des doctors ins backend geschickt, ohne dass es jemand sieht */}
        <input type="hidden" name="doctor" value={id} />
        <label htmlFor="">Worktime</label>
        <input type="datetime-local" name="time" id="" />
        <h3>patient details</h3>
        <label htmlFor="">Mail</label>
        <input type="email" required name="email" />
        <select name="gender" id="">
          <option value="m">m</option>
          <option value="w">w</option>
          <option value="d">d</option>
        </select>
        <label htmlFor="">Whats your problem??</label>
        <input type="text" name="problem" />
        <input className="button" type="submit" value="set appointment" />
      </form>
    </main>
  );
}
