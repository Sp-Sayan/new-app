import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export const getGroqChatCompletion = async (message, model) => {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: message,
            },
        ],
        model: model,
    });
}

//models:

//llama-3.3-70b-versatile
//llama-3.1-8b-instant
//llama-guard-3-8b
//deepseek-r1-distill-llama-70b