const express = require("express");
const User = require("./models/User");

const router = express.Router();

router.get("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
            .populate("followers", "username avatar")
            .populate("following", "username avatar");

        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({
            username: user.username,
            bio: user.bio,
            avatar: user.avatar || "default.jpg",
            followersCount: user.followers.length,
            followingCount: user.following.length,
            followers: user.followers,
            following: user.following,
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
