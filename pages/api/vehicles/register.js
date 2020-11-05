export default function handler(req, res) {
    let v = JSON.parse(req.body)
    if(req.method === "POST") console.log(true)
    console.log(v.id)
    console.log(req.method)
    // User with id exists
      res.status(200).json({message: "IT WORKED!"})
  
    }