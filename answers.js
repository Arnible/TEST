let answers = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(answers);
  }

  if (req.method === "POST") {
    const { questionId, answer } = req.body;

    const newAnswer = {
      id: Date.now(),
      questionId,
      answer
    };

    answers.push(newAnswer);
    return res.status(201).json(newAnswer);
  }

  res.status(405).json({ message: "Method not allowed" });
}
