const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/UserModel");
const routerUser = express.Router();

routerUser.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        const user = await User.findById(id).select("-password");

        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({
            username: user.username,
            email: user.email,
            bio: user.bio || "No bio",
            age: user.age || "No info",
            city: user.city || "No info",
            country: user.country || "No info",
            number: user.number || "No info",
            avatar: user.avatar || "No picture"

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = routerUser;
