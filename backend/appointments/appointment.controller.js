import { Appointment } from "./appointment.model.js";
import { sendMailforAppointmentConfirmation } from "./mails/appointmentConfirmation.js";
import { sendMailforAppointmentRequest } from "./mails/appointmentrequest-mail.js";

export async function addAppointment(req, res) {
  const newAppointment = new Appointment(req.body);
  sendMailforAppointmentRequest();
  await newAppointment.save();
  console.log("NEUER TERMIN: ", newAppointment);
  res.end();
}

export async function getAppointments(req, res) {
  const appointments = await Appointment.find();
  res.json(appointments);
}

export async function getDocsAppointments(req, res) {
  const appointsments = await Appointment.find({
    doctor: req.payload.user,
  });
  res.json(appointsments);
}

export async function appointmentConfirmation(req, res) {
  sendMailforAppointmentConfirmation();
  res.end();
}
