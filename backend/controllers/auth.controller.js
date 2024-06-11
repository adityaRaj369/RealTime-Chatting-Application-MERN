import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Set profile picture URL based on gender
        const profilePicUrl = gender === "male" ? 
            `https://avatar.iran.liara.run/public/boy?username=${username}` : 
            `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create a new user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: profilePicUrl,
        });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token and set cookie
        generateTokenAndSetCookie(newUser._id, res);

        // Respond with the created user's information
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Compare provided password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate JWT token and set cookie
        generateTokenAndSetCookie(user._id, res);

        // Respond with the user's information
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        // Clear the JWT cookie
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
