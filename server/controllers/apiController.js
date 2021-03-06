const express = require('express');
let router = express.Router();
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');

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

router.post('/', uploader.single('image'), async (req, res, next) => {
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

module.exports = router;