import { User } from "./user.model.js";

export async function getActualUser(req, res) {
  try {
    const user = await User.findById(req.payload.user);
    // console.log("UUUUSER: ", user);
    res.json({ user }).toStringify();
  } catch (err) {
    // console.log(err);
    res.status(500).end();
  }
}

export async function deleteDoc(req, res) {
  const user = await User.findById(req.payload.user);
  await User.findOneAndDelete(user._id);
  res.end();
}

export async function editDoc(req, res) {
  const user = await User.findById(req.payload.user);
  await User.findOneAndDelete(user._id);

  const update = {
    name: user.name,
    email: user.email,
    specification: user.specification,
    experience: user.experience,
    description: user.description,
  };

  if (req.file) {
    update.image = req.file.path;
  }

  let editedDoc = await User.updateOne({ _id: user._id }, { $set: update });

  console.log("Edit Doc: ", editedDoc);
  res.end();
}
