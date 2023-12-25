import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// Require custom path 
import {resolve} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import env file
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, '../config/.env') });
const secret_key = process.env.JWT_SECRET;

export const createUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;
    const existEmail = await userModel.findOne({email});
    if (existEmail) {
        res.status(404)
        throw new Error({message: 'Email already exist!'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
        name,
        email, 
        pic,
        password:hashedPassword
    })
    res.status(200).json({message: 'User created successfully'})
});

export const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const existUser = await userModel.findOne({email});
    if (!existUser) {
        res.status(404)
        throw new Error({message: 'Email and password are invalid!'})
    }

    const compare = await bcrypt.compare(password, existUser.password)
    if (compare) {
        const token = await jwt.sign({
            _id : existUser._id
        }, secret_key)
        res.json({message: 'User Login Success!', token})
    } else {
        res.status(400);
        throw new Error({message: 'Email and password are invalid!'})
    }
})