const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Task = require("../models/Task");

// CREATE User 
router.post("/create", async (req, res) => {
  try {
    const { name, email, title, description } = req.body;

    const user = await User.create({ name, email });

    const task = await Task.create({
      title,
      description,
      userId: user._id,
    });

    res.json({ user, task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET All Tasks 
router.get("/tasks", async (res) => {
  try {
    const tasks = await Task.find().populate("userId");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Users
router.get("/users", async (res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;