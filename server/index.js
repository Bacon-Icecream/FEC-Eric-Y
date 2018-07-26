const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const server = express();
const port = 8080;
const router = require('./router.js');

const customLogger = (req, res, next) => {
  console.log('Serving method ', req.method, ' at path ', req.path);
  next();
}

server.use(helmet());
server.use(parser.json());
server.use(parser.urlencoded({ extended: true}));
server.use(customLogger);
server.use('/api', router);
server.use(express.static(path.join(__dirname, '../client/dist')));
server.listen(port, () => { console.log(`Listening on port ${port}`)});