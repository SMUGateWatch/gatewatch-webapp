import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
  const {UID} = req.query
  const {method} = req
  const { db } = await connectToDatabase();
  if(method == 'POST'){
  // const duplicate = await db.collection("students").findOne({UID:UID})

  // res.status(201).json({ id: "2991031", message:"Acknowledged"})
  // if(duplicate == 0) {
    const insertData = await db.collection("students").insertOne(req.body);
    insertData.insertedId ? res.status(200).json({ id: insertData.insertedId, message:"Acknowledged"}): res.status(401).json({ id: "XX00",message:"not Acknowledged"})
  // }
  // if(duplicate > 0){
    // console.log("You have duplicate")
    // res.status(401).json({id:"0000",message: "Duplicate form found."})
  // }
  // else{res.status(401).json({id:"0000",message:"No"})}
  }   
};
