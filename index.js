const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
const app = express();
const taskRoute = require('./routes/task.route.js');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoute); 


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
