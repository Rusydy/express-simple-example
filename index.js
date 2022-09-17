// initialize express app
const express = require('express');
const app = express();
const port = 3000;

// initialize express router
const router = express.Router();

// set router path and initialize the API
router.get('/', (req, res) => {
    res.json([{
        "id": 1,
        "nama": "Diterima",
        "created_at": "2022-09-11T12:35:11.000000Z",
        "updated_at": "2022-09-11T12:35:14.000000Z"
        },
        {
            "id": 2,
            "nama": "Belum Terima",
            "created_at": "2022-09-11T12:35:18.000000Z",
            "updated_at": "2022-09-11T12:35:16.000000Z"
        },
        {
            "id": 3,
            "nama": "Ditolak",
            "created_at": "2022-09-11T12:35:27.000000Z",
            "updated_at": "2022-09-11T12:35:29.000000Z"
        }]);
});

app.use('/api', router);

// start express server on port 3000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});