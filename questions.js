let questions = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(questions);
  }

  if (req.method === "POST") {
    const { text } = req.body;

    const newQuestion = {
      id: Date.now(),
      text
    };

    questions.push(newQuestion);
    return res.status(201).json(newQuestion);
  }

  res.status(405).json({ message: "Method not allowed" });
}
