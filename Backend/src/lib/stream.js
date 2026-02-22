import {StreamChat} from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API key or secret is missing. Please check your environment variables.");
}

export const chatClient = new StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData)=>{
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user Upserted Successfully:" , userData)
    } catch (error) {
        console.error("Error while upserting stream user: ", error);
    }
}

export const deleteStreamUser = async(userId)=>{
    try {
        await chatClient.upsertUser(userId)
        console.log("Stream User Deleted Successfully:", userId);
        
    } catch (error) {
        console.error("Error while deleting stream user: ", error);
    }
}
// todo: add another method to generateToken 
