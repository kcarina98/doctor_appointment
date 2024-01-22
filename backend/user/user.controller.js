import { User } from "./user.model.js";

export async function getActualUser(req, res) {
  console.log("PAyload:", req.payload);
  try {
    const user = await User.findById(req.payload.user);
    console.log("UUUUSER: ", user);
    res.json({ user });
  } catch (err) {
    // console.log(err);
    res.status(500).end();
  }
}
