import { app } from './app.js';

// connectting to the database
import { connectDB } from './data/database.js';
connectDB();

app.listen(5000, () => console.log("Server is Running ... "));