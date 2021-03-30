const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.json({message:'it is working'});
});

app.use(routes);

app.listen(5000, console.log.bind(console, 'Server is listening on port 5000...'));