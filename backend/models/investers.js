import mongoose from "mongoose";

export const Invester = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"   
    },

    invested_amt: {
        type: Number,
    },

    invested_date: {
        type: Date,
        default: Date.now()
    }

});