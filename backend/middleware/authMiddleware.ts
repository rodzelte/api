import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

export const authToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
         res.status(401).json({ message: "Access Denied: No Token Provided" });
         return
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, JWT_SECRET) as { userId: string };
        req.userId = verified.userId;
        next();
    } catch (error) {
         res.status(400).json({ message: "Invalid Token" });
    }
};
