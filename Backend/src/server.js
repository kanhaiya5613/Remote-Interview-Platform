import express from "express"
import {ENV} from "./lib/env.js";
const app = express();

app.get("/HEALTH",(req,res)=>{
    res.status(200).json({msg:"api is up and running"})
});
console.log(ENV.DB_URL);


app.listen(ENV.PORT, ()=> console.log("Server is Running on Port: ",ENV.PORT)); 