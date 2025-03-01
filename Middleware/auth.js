import { User } from "../Models/User.js";
import json from "jsonwebtoken";

export const Authenticate = async (req,res,next) =>{
    const token = req.header("Authorization")
    try {
        if(!token) return res.json({message:"login first"})

        const decode = json.verify(token, "!@#$%^&*()");

         console.log("this is decoded data ",decode)

        const id = decode.userid

        let user = await User.findById(id)
 
        if(!user) return res.json({message:"User not exist"})

        req.user = user;
        next();
    } catch (error) {
        res.json({message:error})
    }
}