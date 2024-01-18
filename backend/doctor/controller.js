import { User } from "../user/user.model.js";

//* alle Ärzte anzeigen für die Übersichts-Seite
export async function getDocs(req, res) {
  const docs = await User.find();
  res.json(docs);
}

//* einen Arzt hinzufügen, wenn er sich registriert hat
export async function addDoc(req, res) {
  const newDoc = new User(req.body);
  newDoc.image = req.file.path;
  await newDoc.save();
  console.log("NEUER ARZT: ", newDoc);
  res.end();
}

//* einen Arzt anzeigen lassen, um dort einen Termin zu buchen
export async function getOneDoc(req, res) {
  try {
    const { id } = req.params;
    const detailDoc = await User.findById(id);
    res.json(detailDoc).end();
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
}

//* einen Arzt löschen, falls er nur ein Hochstapler ist
export async function deleteDoc(req, res) {
  const { id } = req.params;
  await User.findOneAndDelete({ _id: id });
  res.end();
}

//* einen Arzt bearbeiten, zB den Namen weil er geheiratet hat
export async function editDoc(req, res) {
  const { id } = req.params;

  const update = {
    name: req.body.name,
    specification: req.body.specification,
    experience: req.body.experience,
    description: req.body.description,
    worktime: req.body.worktime,
  };

  if (req.file) {
    update.image = req.file.path;
  }

  let editedDoc = await User.updateOne({ _id: id }, { $set: update });

  console.log("Edit Arzt: ", editedDoc);
  res.end();
}
