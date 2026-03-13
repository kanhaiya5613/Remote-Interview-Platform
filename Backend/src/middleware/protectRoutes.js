import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({ message: "Unauthorized - No token" });
            }

            const token = authHeader.split(" ")[1];

            // Verify token with Clerk
            const payload = await clerkClient.verifyToken(token);

            if (!payload || !payload.sub) {
                return res.status(401).json({ message: "Unauthorized - Invalid token" });
            }

            const clerkId = payload.sub;
            const user = await User.findOne({ clerkId });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            req.user = user;
            next();

        } catch (error) {
            console.error("Error in protectRoute middleware", error);
            res.status(401).json({ message: "Unauthorized - Token verification failed" });
        }
    }
];