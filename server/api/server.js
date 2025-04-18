import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.routes.js';
import messageRoutes from '../routes/message.routes.js';
import aiRoutes from '../routes/ai.routes.js';
import connectDB from '../lib/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/ai", aiRoutes);


app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
    connectDB();
})

export default app;