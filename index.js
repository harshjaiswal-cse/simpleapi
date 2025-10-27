// index.js
const express = require('express');
const app = express();

// Challenge ke mutabik Port 80 par chalana hai [cite: 5, 9]
const PORT = 80;

// GET /sayHello route [cite: 10]
app.get('/sayHello', (req, res) => {
  // JSON response "Hello User." bhejein [cite: 11]
  res.json({ message: "Hello User." });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server port ${PORT} par chal raha hai...`);
});