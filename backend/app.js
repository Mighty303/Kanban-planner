const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
let path = require('path');

app.listen(process.env.PORT || 8080, ()=>console.log("Listening on 8080"));
connection.once('open', ()=> {
    console.log('connected to db');
});

app.use(express.static('frontend/public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = require('./routes/index');
app.use('/api', router);

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend', 'public', 'index.html'));
});