const mongoose = require('mongoose');

const TimeLogSchema = new mongoose.Schema({
  taskId: String,
  hours: Number,
  logDate: Date
});

module.exports = mongoose.model('TimeLog', TimeLogSchema);