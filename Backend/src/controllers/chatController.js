import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res){
    try {
        // use clerk id for Stream (not mongo id) => it should match the id we have in the stream dashboard
        const token = chatClient.createToken(req.user.clientId);
        res.status(200).json({
            token,
            userId: req.user.clientId,
            userName: req.user.name,
            userImage: req.user.image
        });
    } catch (error) {
        console.error("Error in getStreamToken controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}