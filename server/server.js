require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/controller');
const app = express();

app.use(bodyParser.json() );


app.get("/user", controller.users)
//----------------------------------

app.get('/Api/Star', (req, res) => {    
    res.status(200).send('Welcome to the Star Wars page')
})

app.post('/Api/Star', (req, res) => {
    console.log(req.body)
    res.status(200).send({ msg:"I recieved your info"})
    
})

app.listen(3005, () => {
    console.log("Battle Cruiser Operational", 3005);
});


