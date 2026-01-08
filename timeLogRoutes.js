const express = require('express');
const router = express.Router();
const TimeLog = require('../models/TimeLog');

router.post('/', async (req, res) => {
  const log = new TimeLog(req.body);
  await log.save();
  res.json(log);
});

router.get('/', async (req, res) => {
  res.json(await TimeLog.find());
});

module.exports = router;