const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./server");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect("mongodb+srv://vlad:vlad@cluster0.xmdnz.mongodb.net/", {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server work!");
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
