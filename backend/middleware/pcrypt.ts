import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';


const prisma = new PrismaClient();
dotenv.config();

export const register = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try {
        const { name , email, password } = req.body;

        if(!name || !email || !password){
             res.status(400).json({message: "Please fill all fields"});
        }

        const emailLower = email.toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailLower)) {
             res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await prisma.user.findUnique({
          where: {email : emailLower }          
        });

        if(existingUser){
            res.status(400).json({message: "User already exists"});
        }


        const hashPassword = await bcrypt.hash(password, 10);


        const user = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: hashPassword,
                
            }
        });
        res.status(200).json({message: "User created successfully", user });


    } catch (error) {
        console.error("Error creating user", error);
        res.status(500).json({message: "Error creating user"});
    }
}

export const login = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
             res.status(400).json({ message: "Please fill all fields" });
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
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error logging in user", error);
        next(error);
    }
}




