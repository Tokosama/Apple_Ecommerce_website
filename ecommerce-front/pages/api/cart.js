import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle (req,res){ // req , res permettetn de recuperer les informations 
    await mongooseConnect(); // Connection a la database
     const ids = req.body.ids;
     res.json(await Product.find({_id :ids }));

}