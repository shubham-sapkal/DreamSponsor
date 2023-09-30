import mongoose from "mongoose";


export const Comments =  new mongoose.Schema({
    comments: {
        type: String,
        required: true,
    }
});