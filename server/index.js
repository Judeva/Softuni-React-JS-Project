const express = require('express');
const config = require('./config/config')
const app = express();

app.get('/', (req, res) => {
    res.json({message: "It's working!"})
});

app.listen(config.PORT, () => console.log(`Server is listening on ${config.PORT}`));