const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/task.model');

app.use(express.json());

mongoose.connect('mongodb+srv://admin:45c2q7U86owUKuDk@backenddb.pcvkind.mongodb.net/Express-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() =>  { 
    console.log('Connected to the mongo db database!');
    app.listen(3000, () => {console.log('Server is running on port 3000')}); 
  })
  .catch(() => {
    console.log("Connection failed")
  });

app.get('/', (req, res) => {
    res.send('Hi from Node API');
})

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({message: error.message});
  } 
})

app.post('/api/tasks', async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.get('/api/task/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.put('/api/task/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if(!task) {
      return res.status(404).json({message: 'Task not found'});
    }

    const updatedTask =await Task.findById(id);
    res.status(200).json(updatedTask);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
})