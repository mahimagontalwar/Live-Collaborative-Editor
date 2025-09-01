import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;
  let reply = `AI Response to: ${message}`;
  let edit: string | null = null;

  if (message.toLowerCase().includes("shorten")) {
    reply = "Shortened version of your text.";
    edit = reply;
  } else if (message.toLowerCase().includes("expand")) {
    reply = "Expanded version of your text.";
    edit = reply;
  } else if (message.toLowerCase().includes("convert to table")) {
    reply = "| Item | Description |\n|------|-------------|\n| A    | Example     |";
    edit = reply;
  }

  res.status(200).json({ reply, edit });
}
