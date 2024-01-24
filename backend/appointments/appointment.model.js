import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  time: String,
  doctor: String,
  email: String,
  gender: String,
  problem: String,
});

export const Appointment = mongoose.model("appointments", appointmentSchema);
