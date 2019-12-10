/**
 * 自定义的服务
 *
 * @format
 */
const dotenv = require('dotenv');
const path = require('path');
// 区分多环境的 env 文件: dotenv 加载 .env 文件配置
dotenv.config({
  path: !process.env.ENVIRONMENT
    ? path.resolve(__dirname, './.env')
    : path.resolve(__dirname, `./.env.${process.env.ENVIRONMENT}`),
});
const next = require('next');
const {createServer} = require('http');
const {parse} = require('url');
const dev = process.env.ENVIRONMENT !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    console.log(err, port);
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
