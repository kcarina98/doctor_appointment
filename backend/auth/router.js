import express from "express";
import { check, login, logout, register } from "./controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";

export const router = new express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.get("/check", checkToken, check);
