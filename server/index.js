const express = require('express');
const { PORT } = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

require('./config/mongoose');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message:'It is working'});
});

app.use('/api', routes);


app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));