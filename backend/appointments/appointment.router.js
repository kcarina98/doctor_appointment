import express from "express";
import multer from "multer";
import {
  addAppointment,
  appointmentConfirmation,
  getAppointments,
  getDocsAppointments,
} from "./appointment.controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";

const upload = multer({ dest: "./images" });
export const router = new express.Router();

router.post("/", upload.none(), addAppointment);
router.get("/", getAppointments);
router.get("/myappointments", checkToken, getDocsAppointments);
router.put("/myappointments/:id", appointmentConfirmation);
