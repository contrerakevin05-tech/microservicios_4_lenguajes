const http = require('http');

const server = http.createServer((req, res) => {

  // 🔥 CORS HEADERS (IMPORTANTE)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // manejar preflight (aunque GET casi no lo usa)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const url = req.url.split('/');

  if (url[1] === 'suma') {
    const num1 = Number(url[2]);
    const num2 = Number(url[3]);

    const resultado = num1 + num2;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ resultado }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo");
});
