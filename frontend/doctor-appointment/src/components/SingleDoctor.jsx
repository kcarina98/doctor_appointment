import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/DoctorList.css";

export default function SingleDoctor({ newDoc }) {
  return (
    <Link to={"/" + newDoc._id} className="singleDoctor">
      <div>
        <img
          src={import.meta.env.VITE_BACKEND + "/" + newDoc.image}
          alt="Profilbild vom Arzt"
          className="doctor-image"
        />
      </div>
      <h3>{newDoc.name}</h3>
      <p>{newDoc.specification}</p>
    </Link>
  );
}
