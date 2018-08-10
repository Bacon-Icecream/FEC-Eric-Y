const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});