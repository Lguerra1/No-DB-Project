
require('dotenv').config();
const express = require('express');
const bodyParser = require('bodyParser');
const app = express();

//app.use() --> middleware that runs for EVERY request
app.unsubscribe(bodyPArser.json());

// ----------ENDPOINTS------------


// -----------ENDPOINTS-----------

app.listen(process.env.SERVER_PORT, () => {
console.log(`listening on port: ${process.env.SERVER_PORT}` );
});