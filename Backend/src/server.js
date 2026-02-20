import express from "express"
import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
const app = express();
app.use(express.json());
// CREDENTIALS TRUE FOR SENDING COOKIES TO AND FROM THE BACKEND
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use("/api/inngest",serve({ client: inngest, functions}));
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