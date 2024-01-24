import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function singleAppointment({ singleAppointment }) {
  const [confirmation, setConfirmation] = useState(null);
  async function bestätigen(id) {
    console.log(id);
    const response = await fetch(
      import.meta.env.VITE_BACKEND + "/api/appointments/myappointments/" + id,
      {
        method: "PUT",
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Termin bestätigt");
      setConfirmation(true);
    }
  }
  return (
    <>
      <div
        className={
          confirmation ? "appointment-div-true" : "appointment-div-false"
        }
      >
        <p>{singleAppointment.time}</p>
        <p>{singleAppointment.problem}</p>
        <p>{singleAppointment.email}</p>
        <button onClick={() => bestätigen(singleAppointment._id)}>✅</button>
        <button>❌</button>
      </div>
    </>
  );
}
