import express from "express";
export const app = express();

import cookieParser from 'cookie-parser';

// user defined routers
import userRouter from './routes/user.js';

// Configuring dotenv file
import { config } from "dotenv";
config({
    path: './data/config.env'
});

// Middlewares
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("<h1>Home Directory</h1>")
});


// using user define routes
app.use("/api/v1/users", userRouter);

