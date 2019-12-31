const express = require('express');
const app = express();
const port = 4000;
const database = require('./database.js');
const router = require('./routes.js');
const postapi = require('./postapi.js');

app.use('/',express.static('./static'));
app.use('/post',postapi);
app.use('/api',express.json());
app.use('/api',router);

app.listen(port, ()=>console.log(`server listening on port ${port}`));
