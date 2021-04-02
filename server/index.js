require('dotenv').config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const { Storage } = require('@google-cloud/storage');
const multer = require('multer');

const routes = require('./routes');
const app = express();

require('./config/mongoose');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'It is working' });
});

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1 * 1024 * 1024,
    },
});

app.post('/api/upload', uploader.single('image'), async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }

        const blob = bucket.file(req.file.originalname);

        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        blobWriter.on('error', (err) => next(err));

        blobWriter.on('finish', () => {
            // Assembling public URL for accessing the file via HTTP
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`;

            // Return the file name and its public URL
            res
                .status(200)
                .send({ fileName: req.file.originalname, fileLocation: publicUrl });
        });

        // When there is no more data to be consumed from the stream
        blobWriter.end(req.file.buffer);

    } catch (error) {
        res.status(400).send(
            `Error, could not upload file: ${error}`
        );
        return;
    }
});

app.use('/api', routes);


app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));