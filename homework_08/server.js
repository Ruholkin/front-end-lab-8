process.stdout.write('What are you waiting for? \n');

const express = require('express');
const app = express();
const musicians = require('./routes');
app.use('/', musicians);

app.listen(process.env.PORT || 3000);