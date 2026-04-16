const express = require('express');
const app = express();

// 🔥 CORS MANUAL (más seguro que confiar solo en middleware)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.get('/resta', (req, res) => {
  const { num1, num2 } = req.query;

  const resultado = Number(num1) - Number(num2);

  res.json({ resultado });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo');
});
