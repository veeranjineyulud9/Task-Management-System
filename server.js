const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ptms');

app.get('/', (req, res) => {
  res.send('Project Time Management System API');
});

app.use('/api/projects', require('./src/routes/projectRoutes'));
app.use('/api/tasks', require('./src/routes/taskRoutes'));
app.use('/api/timelogs', require('./src/routes/timeLogRoutes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});