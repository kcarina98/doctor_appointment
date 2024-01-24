import DocNavbar from "../components/DocNavbar";
import { useState, useEffect } from "react";
import "./css/Appointments.css";
import SingleAppointment from "./SingleAppointment";

export default function Appointments() {
  const [docProfil, setDocProfil] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/user/actual",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setDocProfil(await response.json());
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getDocsAppointments() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/appointments/myappointments",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setAppointments(await response.json());
      }
    }
    getDocsAppointments();
  }, []);

  return (
    <main className="appointments">
      <DocNavbar />
      <h2>APPOINTMENT REQUESTS</h2>
      {appointments.map((singleAppointment) => {
        return <SingleAppointment singleAppointment={singleAppointment} />;
      })}
    </main>
  );
}
