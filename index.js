const express = require('express');
const app = express();
const mongoose = require('mongoose');

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