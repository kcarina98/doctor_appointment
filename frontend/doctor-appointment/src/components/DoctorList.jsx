import SingleDoctor from "./SingleDoctor";
import { useEffect, useState } from "react";
import "./css/DoctorList.css";
import Navbar from "./Navbar";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function getDocs() {
      const response = await fetch(import.meta.env.VITE_BACKEND + "/api/docs");
      const data = await response.json();
      setDoctors(data);
    }
    getDocs();
  }, []);

  return (
    <section className="list">
      <Navbar />
      <h1>all doctors</h1>
      <section className="doctor-list">
        {doctors.map((newDoc) => {
          return <SingleDoctor newDoc={newDoc} key={newDoc._id} />;
        })}
      </section>
    </section>
  );
}
