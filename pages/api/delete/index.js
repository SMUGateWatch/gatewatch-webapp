export default function handler(req, res) {
  const isDelete = req.method === "DELETE" ? true : false;
  const { isUser } = req.query;
  if (isDelete) {
    if (isUser) return res.status(200).json({ message: "IT WORKED!" });
  }
}
