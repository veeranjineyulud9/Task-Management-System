const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  projectId: String,
  name: String,
  status: String
});

module.exports = mongoose.model('Task', TaskSchema);