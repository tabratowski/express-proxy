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
  console.error("new deployment");
  process.stdout.write("new deployment process stdout")
  process.stderr.write("new deployment process error")
  console.log("new deployment console log")
  console.error("new deployment console error")
});

app.use('/proxy', proxy);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
