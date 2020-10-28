const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('1234');
});

app.get('/login/:username/:password', (req, res) => {
  res.json(req.params);
});

app.listen(3000, () => {
  console.log('Server running');
});
