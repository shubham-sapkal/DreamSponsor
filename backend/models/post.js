import mongoose from "mongoose";

import { Comments } from "./Comments.js";
import { Invester } from "./investers.js";


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    desc: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    likes: {
        type: Number,
        default: 0,
    },

    comments: {
        type: [Comments]
    },

    investerCount: {
        type: Number,
        default: 0
    },

    totalInvestment: {
        type: Number,
        default: 0
    },

    investers: {
        type: [Invester]
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
});

export const Post = mongoose.model("post", schema);