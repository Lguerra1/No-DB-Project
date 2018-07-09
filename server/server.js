
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/controller.js');


const app = express();

//app.use() --> middleware that runs for EVERY request
app.use(bodyParser.json());
controller(app);



app.listen(3000, () => {
console.log("Battle Station Operational", 3000 );
});


