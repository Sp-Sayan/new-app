import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.routes.js';
import messageRoutes from '../routes/message.routes.js';
import aiRoutes from '../routes/ai.routes.js';
import connectDB from '../lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from '../lib/socket.js';

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json({
    limit: '10mb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}))
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/ai", aiRoutes);


server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
    connectDB();
})

export default app;