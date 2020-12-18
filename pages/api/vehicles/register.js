import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
  // const {UID} = req.query;
  const {method} = req;
  const {UID} = req.body
  const { db } = await connectToDatabase();
  if(method == 'POST'){
  const duplicate = await db.collection("students").findOne({UID:UID})
  duplicate ? console.log("Duplicate") : console.log("Not Duplicate")
  if(!duplicate) {
    const insertData = await db.collection("students").insertOne(req.body);
    insertData.insertedId ? res.status(200).json({ id: insertData.insertedId, message:"Acknowledged"}): res.status(401).json({ id: "XX00",message:"not Acknowledged"})
    
  }
  if(duplicate){
   // console.log("You have duplicate")
    res.status(401).json({id:"0000",message: "Duplicate form found."})
  
  }
}
};
