import express from "express";
import multer from "multer";
import { checkToken } from "../middlewares/auth.middleware.js";
import { getActualUser } from "./user.controller.js";

const upload = multer({ dest: "./images" });
export const router = new express.Router();

// router.get("/", checkToken, onlyForAdmin, getUser);
// router.post("/", checkToken, onlyForAdmin, upload.none(), createNewUser);
router.get("/actual", checkToken, getActualUser);
