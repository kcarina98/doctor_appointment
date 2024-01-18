import { verifyToken } from "../auth/service.js";

export function checkToken(req, res, next) {
  const token = req.cookies.supercmsauth;
  try {
    req.payload = verifyToken(token);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).end();
  }
}
