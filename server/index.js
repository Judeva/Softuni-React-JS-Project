const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('it is working');
});

app.listen(5000, console.log.bind(console, 'Server is listening on port 5000...'));