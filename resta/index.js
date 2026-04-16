const express = require('express');
const cors = require('cors');

const app = express();

// 🔥 habilitar CORS
app.use(cors());

app.get('/resta', (req, res) => {
  const { num1, num2 } = req.query;

  const resultado = Number(num1) - Number(num2);

  res.json({ resultado });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo');
});
