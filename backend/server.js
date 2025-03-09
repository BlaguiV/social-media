const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

//registration
router.post("/register", async (req, res) => {
    const { username, email, password, bio, age, city, country, number, avatar } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 7)

        const newUser = new User({ username, email, password: hashedPassword, bio, age, city, country, number, avatar });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

//login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({ message: "Login successful", token, userId: user._id });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

//get one user
router.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});
//get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

//delete user

router.delete("/delete/:id", async (req, res) => {

    const { id } = req.params

    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({ message: "user delete" })
    } catch (e) {
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = router;
