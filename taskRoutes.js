const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.get('/', async (req, res) => {
  res.json(await Task.find());
});

module.exports = router;