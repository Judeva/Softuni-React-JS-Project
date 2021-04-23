require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('./config/mongoose');
const app = express();
const router = require('./routes');

app.use(cors({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);

app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));