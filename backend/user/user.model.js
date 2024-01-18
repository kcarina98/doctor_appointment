import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  specification: String,
  experience: Number,
  description: String,
  worktime: String,
  image: String,
  password: String,
  salt: String,
  last_login: Date,
});

export const User = mongoose.model("user", userSchema);
