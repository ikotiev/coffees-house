const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes'));

mongoose.connect(
  'mongodb+srv://ikotiev:mosremonting06@cluster0.tlczq6f.mongodb.net/coffee?retryWrites=true&w=majority',
  () => {
    console.log('connected');
    app.listen(3000, function () {
      console.log('server has been started');
    });
  },
);
