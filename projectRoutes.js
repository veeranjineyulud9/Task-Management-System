const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

router.get('/', async (req, res) => {
  res.json(await Project.find());
});

module.exports = router;