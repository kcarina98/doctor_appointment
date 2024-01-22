import express from "express";
import { check, login, logout, register } from "./controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";
import multer from "multer";

export const router = new express.Router();
const upload = multer({ dest: "./images" });

router.post("/login", upload.none(), login);
router.post("/register", upload.single("image"), register);
router.get("/logout", logout);
router.get("/check", checkToken, check);
