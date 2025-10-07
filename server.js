import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv/config';


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
const connection = mongoose.connection;
connection.once("open", () => { console.log("MongoDB database connection established successfully")});
connection.on("error", (error) => { console.log("MongoDB connection error:", error)});

const app = express();

import projectRoutes from './routes/project.js';
app.use(express.json());
app.use('/projects', projectRoutes);


app.listen(3000);

console.log("Server is running on port 3000");