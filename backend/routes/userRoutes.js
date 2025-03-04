const express = require("express");
const User = require("../Models/UserModel");

const routerUser = express.Router();

routerUser.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select("-password");

        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({
            username: user.username,
            bio: user.bio || "No bio",
            age: user.age || "",
            city: user.city || "",
            country: user.country || "",
            number: user.number || ""
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = routerUser;
