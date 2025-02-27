import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
    throw new Error("Missing JWT_SECRET in environment variables");
}



export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
             res.status(400).json({ message: "Please fill all fields" });
            return;
        }

        const emailLower = email.toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailLower)) {
             res.status(400).json({ message: "Invalid email format" });
            return;
        }

        const existingUser = await prisma.user.findUnique({
            where: { email: emailLower }
        });

        if (existingUser) {
             res.status(400).json({ message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email: emailLower,
                password: hashedPassword,
            }
        });

        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error("Error creating user", error);
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
             res.status(400).json({ message: "Please fill all fields" });
             return;
        }

        const normalizedEmail = email.toLowerCase();

        const user = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (!user) {
             res.status(400).json({ message: "User does not exist" });
            return;
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
             res.status(400).json({ message: "Invalid credentials" });
             return;
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Error logging in user", error);
        next(error);
    }
};