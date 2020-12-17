import { connectToDatabase } from "../../../utils/mongodb";
function parseToJSON(obj){
  return JSON.parse(obj)
}
export default async (req, res) => {
  const {UID} = req.query
  const { db } = await connectToDatabase();
  const duplicate = await db.collection("students").findOne({UID:UID})
  if(!duplicate) {
    const insertData = await db.collection("students").insertOne(req.body);
    insertData.insertedId ? res.status(200).json({ id: insertData.insertedId, message:"Acknowledged"}): res.status(401).json({ message:"not Acknowledged"})
  }
  else{
    console.log("You have duplicate")
    res.status(401).json({message: "Duplicate form found."})
  }
   
};
