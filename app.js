const express = require('express');
const app = express()

const port = 4000;

app.get('/', (req, res) =>{
    res.send('<h1> Hello world');
})

app.listen(port, ()=>{
    console.log("running on the port");
})