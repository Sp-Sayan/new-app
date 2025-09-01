import User from '../models/user.model.js';
import generateToken from '../lib/utils.js';
import bcrypt from 'bcryptjs';
import cloudinary from '../lib/cloudinary.js';


const signup = async (req, res) => {
    const { userName, email, password } = req.body;
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
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        //check if user exists
        const validate = await User.findOne({ email })

        if (!validate) {
            return res.status(400).json({
                message: "User not found"
            });
        }
        //comparing password
        const isPassCorrect = await bcrypt.compare(password, validate.password);

        if (!isPassCorrect) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        generateToken(validate._id, res);
        res.status(200).json({
            _id: validate._id,
            userName: validate.userName,
            email: validate.email,
            profilePic: validate.profilePic,
            message: "Login Successful 😍"
        })
    }

    catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }


}
const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        });
        res.status(200).json({
            message: "Logged out Successfully"
        });

    } catch (error) {
        console.log("Error: ", error);
    }
}

const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id; //the user added to req in middleware

        if (!profilePic) {
            return res.status(400).json({
                message: "Profile Pic Required"
            })
        }

        const upload = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: upload.secure_url }, { new: true });

        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const checkAuth = (req, res) => {
    try {
        res.status(200).json(
            req.user
        );
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


export { signup, login, logout, updateProfile, checkAuth };