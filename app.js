const express = require("express");
const app = express();
const connection = require('./db/connection');

const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening on 8080"));
connection.once('open', ()=> {
});

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/api/v1/tasks', (req, res)=> {
    res.send('success');
});

app.post('/api/v1/tasks', (req, res)=> {
    res.send('success');
});

app.get('*', (req, res) =>{
    
})