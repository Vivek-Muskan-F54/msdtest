const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const path = require('path');

const productsRouter = require('./routes/products');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static website
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/products', productsRouter);

// Create HTTP server to log requests using http module
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
