'use strict';

const express = require('express');

// Function
function timestamp() {
  const today = new Date();
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Kubernetes, il est ' + timestamp() + ' et je m\'appelle ' + process.env.NAME);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
