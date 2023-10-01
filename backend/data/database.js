import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
    .connect(process.env.MONGODB_URL, {
        dbName: "dreamsponsor",
    })
    .then( () => console.log("Database Connected!!")  )
    .then( (e) => console.log("Database Error: " + e))
};