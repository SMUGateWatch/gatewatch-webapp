export default function handler(req, res) {
    const isDelete = (req.method === "DELETE") ?   true :  false
    
    if(isDelete) res.status(200).json({message: "IT WORKED!"})  
   }