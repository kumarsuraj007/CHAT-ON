import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'

const connectDB = asyncHandler(async (err) => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connect: ${conn.connection.host}`);
    if (err) {
         console.log(`Error connecting to mongo ${err.message}`);
         process.exit(1);
    }
});

export default connectDB;