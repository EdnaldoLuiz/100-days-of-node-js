const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

function getVideoPath() {
    return path.join(__dirname, 'assets', 'teste.mp4');
}

function getVideoStats(videoPath) {
    return fs.statSync(videoPath);
}

function handleRangeRequest(req, res, videoPath, fileSize) {
    const range = req.headers.range;
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize) {
        res.status(416).send('Intervalo solicitado não satisfatório\n' + start + ' >= ' + fileSize);
        return;
    }

    const chunkSize = (end - start) + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
}

function handleFullRequest(res, videoPath, fileSize) {
    const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
}

app.get('/video', (req, res) => {
    const videoPath = getVideoPath();
    const videoStat = getVideoStats(videoPath);
    const fileSize = videoStat.size;
    const range = req.headers.range;

    if (range) {
        handleRangeRequest(req, res, videoPath, fileSize);
    } else {
        handleFullRequest(res, videoPath, fileSize);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});