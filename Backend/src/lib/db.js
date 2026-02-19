import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    if(!ENV.DB_URL){
        console.log("❌ DB_URL is not defined in environment variables");
        process.exit(1);
    }
    try{
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("✅ Connected to MongoDB:",conn.connection.host);
        }catch(error){
            console.log("❌ Error connecting to MongoDB:",error);
            process.exit(1);
        }
    }
    