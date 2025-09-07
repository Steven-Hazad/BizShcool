require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('School App Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});