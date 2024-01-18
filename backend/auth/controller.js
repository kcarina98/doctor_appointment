import { User } from "../user/user.model.js";
import { createHash, createToken, createSalt } from "./service.js";

export async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).end();
  if (user.password !== createHash(req.body.password, user.salt))
    return res.status(401).end();

  const token = createToken({ user: user._id });

  res
    .cookie("supercmsauth", token, {
      httpOnly: true,
      secure: true,
    })
    .end();
}

export async function register(req, res) {
  const dbUser = await User.findOne({ email: req.body.email });
  if (dbUser) return res.status(401).end();
  const newUser = new User(req.body);
  newUser.salt = createSalt();
  newUser.password = createHash(newUser.password, newUser.salt);
  await newUser.save();
  res.status(201).end();
}

export function logout(req, res) {
  res.end();
}

// wird nur aufgerufen bei einem validen jwt
export function check(req, res) {
  res.end();
}
