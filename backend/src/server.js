import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import cors from "cors";
import taskRoute from "./routes/tasksRouters.js";
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
connectDB();

app.use(express.json());
app.use('/api/tasks', taskRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

