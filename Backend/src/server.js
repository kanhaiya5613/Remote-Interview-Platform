import express from "express"
import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import path from "path";
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
const app = express();
const __dirname = path.resolve();
app.use(express.json());
// CREDENTIALS TRUE FOR SENDING COOKIES TO AND FROM THE BACKEND
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use(clerkMiddleware())
app.use("/api/inngest",serve({ client: inngest, functions}));
app.use("/api/chat",chatRoutes);
app.use("/api/sessions",sessionRoutes);
app.get("/api/HEALTH",(req,res)=>{
    res.status(200).json({msg:"api is up and running"})
});

console.log(ENV.DB_URL);

// make our app ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname, "../Frontend","dist","index.html"));
    })
}

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