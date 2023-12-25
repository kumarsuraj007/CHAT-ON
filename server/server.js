import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

dotenv.config({ path: "./config/.env" });

// Database configuration
import connectDB from "./config/db.js";
connectDB();

// Middleware
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/authentication", userRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => console.log(`Server started at localhost: 5000`));
