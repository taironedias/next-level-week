import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send([
        'Marcelo',
        'Tairone',
        'Maca',
        'Ênio'
    ]);
});

app.listen(3333, () => {
    console.log("server runing port 3333");
});