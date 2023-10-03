import express from "express";
export const app = express();

import cookieParser from 'cookie-parser';

import cors from "cors";

// user defined routers
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';

// Configuring dotenv file
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
config({
    path: './data/config.env'
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))


// app.get("/", (req, res) => {
//     res.send("<h1>Home Directory</h1>")
// });


// using user define routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Error Handling middleware
app.use(errorMiddleware);