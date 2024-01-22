import { User } from "../user/user.model.js";
import { createHash, createToken, createSalt } from "./service.js";

export async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });
  console.log("User: ", user);
  if (!user) return res.status(401).end();
  if (user.password !== createHash(req.body.password, user.salt))
    return res.status(401).end();

  const token = createToken({ user: user._id });

  console.log("Token: ", token);

  res
    .cookie("keks", token, {
      httpOnly: true,
      // secure: true,
    })
    .json({ email: user.email });
}

export async function register(req, res) {
  const dbUser = await User.findOne({ email: req.body.email });
  if (dbUser) return res.status(401).end();
  const newUser = new User(req.body);
  newUser.image = req.file.path;
  newUser.salt = createSalt();
  newUser.password = createHash(newUser.password, newUser.salt);
  await newUser.save();
  console.log("newUser:", newUser);
  res.status(201).end();
}

export function logout(req, res) {
  res.end();
}

// wird nur aufgerufen bei einem validen jwt
export function check(req, res) {
  res.json({ user: req.payload.user });
  console.log(req.payload.user);
}
