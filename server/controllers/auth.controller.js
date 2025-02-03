import User from '../models/user.model.js';
import generateToken from '../lib/utils.js';
import bcrypt from 'bcryptjs';


const signup = async (req, res) => {
    const { email, userName, password } = req.body;
    try {
        //check password length
        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters"
            });
        }

        //check for empty fields
        if (email == "" || userName == "" || password == "") {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        //checking if user exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        //encrypting password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            email: email,
            userName: userName,
            password: hashedPass
        })

        if (newUser) {
            //generating jwt
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
                profilePic: newUser.profilePic,
                message: "USER CREATED",
            });
        }
        else {
            return res.status(400).json({
                message: "Invalid Data"
            });
        }

    } catch (error) {
        res.status(400).send("Error in signup: ", error);
    }
}
const login = (req, res) => {
    res.send("login Route");
}
const logout = (req, res) => {
    res.send("logout Route");
}


export { signup, login, logout };