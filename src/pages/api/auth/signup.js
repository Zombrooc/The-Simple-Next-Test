import { connectToDatabase } from "../../../middleware/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await connectToDatabase();

    const collection = db.collection("users");

    const { name, email, password } = req.body;

    if (await collection.findOne({ email })) {
      return res.status(409).json({
        field: "email",
        message: "Já existe um usuário com esse e-mail",
      });
    }

    try {
      const newUser = await collection.insertOne({
        name,
        email,
        password,
      });

      if (newUser) {
        return res.status(201).json({ sucuess: true});
      }
    } catch (error) {
      return res.send(error);
    }
  }
}
