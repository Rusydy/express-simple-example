// initialize express app
const express = require('express');
const app = express();
const port = 3000;

// initialize express router
const router = express.Router();

// set router path and initialize the API
router.get('/api/kordinators/signin', (req, res) => {
    res.json([{
        "nik": "3322071208870001",
        "nama": "aviq",
        "no_hp": "085647907991",
        "email": "aviq.baihaqy@gmail.com",
        "alamat": "jl. ki gede sebayu Rt.03 Rw.04 Danawarih Kec. balapulang, balapulang",
        "rt": "003",
        "rw": "003",
        "kelurahan_desa": "56567",
        "kecamatan": "hhjg",
        "kab_kota": "Kab. Tegal",
        "provinsi": "jhkhj",
        "kordinator_key": "531a3158c7fa8d988ac6795ab25185095d6bb316de4e2d94c498bfbfe49e3e85b7db7b3e0972eb354f031a10b464cb3970ef55b5c053b2a3afeea5b342a0f6e1"
    }]);
});

app.use('/api', router);

// start express server on port 3000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});