import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { router as docRouter } from "./doctor/router.js";
import { router as authRouter } from "./auth/router.js";

//- mit Mongoose verbinden
await mongoose.connect(process.env.MONGODB);

const app = express();
app.use("/images", express.static("./images"));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/docs", docRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, console.log(process.env.PORT));
