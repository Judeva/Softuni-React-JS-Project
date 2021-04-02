const express = require('express');
const { PORT } = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const routes = require('./routes');
const app = express();

require('./config/mongoose');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1 * 1024 * 1024,
    },
});

app.get('/', (req, res) => {
    res.json({ message: 'It is working' });
});

app.post('/api/upload', uploader.single('image'), async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }
        // This is where we'll upload our file to Cloud Storage
    } catch (error) {
        res.status(400).send(
            `Error, could not upload file: ${error}`
        );
        return;
    }
});

app.use('/api', routes);


app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));