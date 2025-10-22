const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const path = require('path');

const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);

const server = http.createServer(app);
server.on('request', (req, res) => {
  console.log(`[HTTP] ${req.method} ${req.url}`);
});

const PORT = 4000;
server.listen(PORT, () => {
  const platform = os.platform();
  const cpuCores = os.cpus().length;
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`System Info -> Platform: ${platform}, CPU Cores: ${cpuCores}`);
});
