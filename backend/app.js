import express from "express";
export const app = express();

// Configuring dotenv file
import { config } from "dotenv";
config({
    path: './data/config.env'
});

app.get("/", (req, res) => {
    res.send("<h1>Home Directory</h1>")
});