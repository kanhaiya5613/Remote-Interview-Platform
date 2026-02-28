
import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req,res){
    // steps 
    // 1. validate input
    // 2. generate a unique call id and stream video
    // 3. create session in db
    // 4. create stream video call and chat messaging
    try {
        const {problem,difficulty} = req.body;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        if(!problem || !difficulty){
            return res.status(400).json({message:"Problem and difficulty are required"})
        }

        // generate a unique call id and stream video

        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`

        // create session in db
        const session = await Session.create({
            problem,
            difficulty,
            host: userId,
            callId
            })
        
        // create stream video call here using callId as the unique identifier for the call
        // steps
        // 1. create a call with the callId
        // 2. pass the clerkId and any custom data (problem, difficulty, sessionId) as metadata when creating the call so that we can use it later for authentication and to display relevant info in the call
        // 3. return the callId to the frontend so that the host can start the call and share the callId with the participant when they join
        // 4. when participant tries to join using the callId, we can verify the call exists and is active, and then allow them to join the call

        await streamClient.video.call("default", callId).getOrCreate({
            data:{
                created_by_id: clerkId,
                custom:{ problem, difficulty, sessionId: session._id.toString()},
            }
        })

        // chat messaging
        // steps
        // 1. create a channel with the sessionId as the unique identifier for the channel
        // 2. pass any custom data (problem, difficulty) as metadata when creating the channel so that we can use it later to display relevant info in the chat
        // 3. add the host as a member of the channel
        // 4. when participant tries to join using the callId, we can also add them to the chat channel so that they can participate in the chat

        const channel = chatClient.channel("messaging", callId, {
            name: `${problem} Session`,
            created_by_id: clerkId,
            members: [clerkId],
        })

        await channel.create();

        res.status(201).json({session});

    } catch (error) {
        console.log("Error in createSession controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getActiveSessions(_,res){
    // steps
    // 1. get all active sessions
    // 2. populate host details (name, profileImage, email, clerkId) from User model and sort by created at in decending order and limit 20 sessions
    try {
        const sessions = await Session.find({status:"active"})
        .populate("host","name profileImage email clerkId")
        .sort({createdAt: -1})
        .limit(20);

        res.status(200).json({sessions});
    } catch (error) {
        console.log("Error in getActiveSessions controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getMyRecentSessions(req,res){
    // steps
    // 1. get sessions where user is host or participant
    // 2. get sessions where status is completed and user there host or participant
    // 3. sort them
    // 4. limit 20 sessions
    try {
        const userId = req.user._id;

        // ger sessions where user is host or participant
        const sessions = await Session.find({
            status:"completed",
            $or: [{host: userId}, {participant: userId}]
        })
        .sort({createdAt: -1})
        .limit(20);

        res.status(200).json({sessions});

    } catch (error) {
        console.log("Error in getMyRecentSessions controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getSessionById(req,res){
    // steps
    // 1. get id of the session from params
    // 2. find the session by id and populate host and participant details (name, profileImage, email, clerkId) from User model
    try {
        const {id} = req.params;
        const session = await Session.findById(id)
        .populate("host","name profileImage email clerkId")
        .populate("participant","name profileImage email clerkId");
        
        if(!session){
            return res.status(404).json({message:"Session not found"});
        }
        if(session.status !== "active"){
            return res.status(400).json({message: "Cannot join a completed session"})
        }
        if(session.host.toString() === userId.toString()){
            return res.status(400).json({message:"Host cannot join their own session as participant"});
        }
        res.status(200).json({session});
    } catch (error) {
        console.log("Error in getSessionById controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function joinSession(req,res){
    // steps
    // 1. get id,userId and clerkId from req
    // 2. find the session by id
    // 3. check if session is available or not
    // 4. check if session is already full or not
    // 5. if everything is fine then update the session with participant id and save it
    // 6. add the participant to the stream video call using the callId and also add them to the chat channel using the callId
    try {
        const {id} = req.params;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        const session = await Session.findById(id);
        // Check Session is available or not
        if(!session){
            return res.status(404).json({message:"Session not found"});
        }
        // check if session is already full
        if(session.participant) return res.status(409).json({message:"Session is full"});

        session.participant = userId
        await session.save()

        const channel = chatClient.channel("messaging",session.callId)
        await channel.addMembers([clerkId])

        res.status(200).json({session})
    } catch (error) {
        console.log("Error in joinSession controller:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function endSession(req,res){
    // steps
    // 1. get id and userId from req
    // 2. find the session by id
    // 3. check if session is available or not
    // 4. check if user is host or not
    // 5. if everything is fine then update the session status to completed and save it
    // 6. delete the stream video call using the callId and also delete the chat channel using the callId to clean up resources
    try {
        const {id} = req.params
        const userId = req.user._id

        const session = await Session.findById(id);

        if(!session) return res.status(404).json({message: "Session not found"})
        
        // Check if user is a host
        if(session.host.toString()!== userId.toString()){
            return res.status(403).json({message: "Only the host can end the session"});
        } 

        // check if session is already completed
        if(session.status === "completed"){
            return res.status(400).json({message: "Session is already completed"});
        }

        session.status = "completed"
        session.save()

        // Delete stream video call
        const call = streamClient.video.call("default", session.callId);
        await call.delete({ hard : true});

        // delete stream chat channel
        const channel = chatClient.channel("messaging",session.callId);
        await channel.delete()

    } catch (error) {
        console.log("error while Ending the Session", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
