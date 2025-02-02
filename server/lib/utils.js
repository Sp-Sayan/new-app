import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //in ms
        httpOnly: true, //prevents XSS attacks
        sameSite: 'strict', //forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })

    return token;
}

export default generateToken;