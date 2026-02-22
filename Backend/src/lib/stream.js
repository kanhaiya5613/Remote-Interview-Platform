import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or secret missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted:", userData);
  } catch (error) {
    console.error("Upsert error:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId, { hard_delete: true });
    console.log("Stream user deleted:", userId);
  } catch (error) {
    console.error("Delete error:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    return chatClient.createToken(userId);
  } catch (error) {
    console.error("Token error:", error);
  }
};