import { verifyToken } from "../auth/service.js";

export function checkToken(req, res, next) {
  // console.log("Cookies:", req.cookies);
  const token = req.cookies.keks;
  // console.log("TOKEN: ", token);
  try {
    req.payload = verifyToken(token);
    console.log("Payload im checktoken", req.payload);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).end();
  }
}
