const express = require('express');
const path = require('path');

const app = new express();

const PORT = process.env.PORT || 8080;

//set static folder
app.use('/scripts',express.static(path.join(__dirname,'node_modules')));
app.use('/content',express.static(path.join(__dirname,'content')));
app.use('/css',express.static(path.join(__dirname,'public','css')));
app.use(express.static(__dirname));

app.listen(PORT,() => {console.log(`Server running on port ${PORT}`)});