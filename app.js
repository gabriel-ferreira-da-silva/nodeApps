const express = require('express');

const app  = express();

app.listen(3000);

app.get('/',(req, res)=>{
    res.sendFile('./index.html', {root:__dirname});
});

app.get('/all',(req, res)=>{
    res.send("<h1>hello to all</h1>");
});