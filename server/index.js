const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/catchasingtail', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Conected!');
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message:'it is working'});
});

app.use('/api', routes);

app.listen(5000, console.log.bind(console, 'Server is listening on port 5000...'));