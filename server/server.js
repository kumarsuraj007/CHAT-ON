import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import {chats} from './config/data.js'

const app = express();
const port = process.env.PORT || 4000;

dotenv.config({path: './config/.env'})

// Database configuration
import connectDB from './config/db.js';
connectDB();

// Middleware 
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}))

// routes 
app.get('/api/chat', (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})


app.listen(port, () => console.log(`Server started at localhost: ${port}`));