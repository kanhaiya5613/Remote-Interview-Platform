import express from "express"
import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
const app = express();

app.get("/HEALTH",(req,res)=>{
    res.status(200).json({msg:"api is up and running"})
});
console.log(ENV.DB_URL);


const startServer = async () => {
    try{
        await connectDB();
        app.listen(ENV.PORT,()=> console.log(`✅ Server is running on port ${ENV.PORT}`));
    }catch(error){
        console.log("❌ Error starting server:",error);
        process.exit(1);
    }
};
startServer();