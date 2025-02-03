import express from 'express';
import assistant from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/assistant', assistant);

export default router;