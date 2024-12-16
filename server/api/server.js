import express from 'express';
import dotenv from 'dotenv';

const env = dotenv.config();
const app = express();
const port = process.env.PORT || 3000;





app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})

export default app;