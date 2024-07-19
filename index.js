require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const proxy = createProxyMiddleware({
  target: process.env.WORDPRESS_URL,
  changeOrigin: true,
});

const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello in Express World!');
});

app.use('/proxy', proxy);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
