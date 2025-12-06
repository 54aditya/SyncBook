import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/route.js';
import mongoose from 'mongoose';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
})
);

app.use("/",route);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

