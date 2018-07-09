
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//app.use() --> middleware that runs for EVERY request


// ----------ENDPOINTS------------


// -----------ENDPOINTS-----------

app.listen(process.env.SERVER_PORT, () => {
console.log(`Battle Station Operational ${process.env.SERVER_PORT}` );
});


