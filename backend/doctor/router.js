import express from "express";
import multer from "multer";
import {
  addDoc,
  deleteDoc,
  editDoc,
  getDocs,
  getOneDoc,
} from "./controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";

export const router = new express.Router();
const upload = multer({ dest: "./images" });

router.get("/", getDocs);
router.get("/:id", getOneDoc);
router.post("/", upload.single("image"), addDoc);
router.delete("/:id", checkToken, deleteDoc);
router.put("/id", checkToken, upload.single("image"), editDoc);
