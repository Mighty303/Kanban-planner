const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db/connection');

app.listen(process.env.PORT || 8080, ()=>console.log("Listening on 8080"));
connection.once('open', ()=> {
    console.log('connected to db');
});

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = require('./routes/index');
app.use('/api', router);

app.get('*', (req, res) =>{
    
});