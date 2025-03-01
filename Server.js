// console.log(`Shri Swami Samarth`);
// console.log(`Radhe Radhe`);

import express from "express";
import bodyparser from "express";
import mongoose from "mongoose";
import Userrouter from "./Router/Router.js";
import Reciperouter from "./Router/Recipe.js";
import cors from "cors";


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE","PATCH"],
    credentials:true
}))

app.use("/api",Userrouter);
app.use('/api',Reciperouter);

mongoose.connect("mongodb+srv://suyodaule2807:Test1234@cluster0.5mbw3.mongodb.net/")
.then(()=>console.log("mongoo connetecd successfully"))
.catch(()=> console.log("mongoo not connected successfully"));

app.listen(port, ()=>{
console.log(`Localhost is running on ${port} server `);
})

//mongoose username = suyogdaule2807
// mongoose password = Test1234