import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';




const protectRoute = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;
        //console.log(token);
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - No token provided"
            });
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedData) {
            return res.status(401).json({
                message: "Unauthorized - Invalid Token"
            });
        }

        const user = await User.findById(decodedData.userId).select("-password");

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in auth middleware: ", error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default protectRoute;