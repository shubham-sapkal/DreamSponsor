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

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     // res.sendStatus(204);
//     next();
// });

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionSuccessStatus:200,
}));

// add the following code to enable CORS
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
//     next();
// });


// using user define routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);


app.get("/", (req, res) => {
    res.send("<h1>Home Directory</h1>")
});



// Error Handling middleware
app.use(errorMiddleware);