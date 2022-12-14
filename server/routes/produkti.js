const express = require("express");
const router = express.Router();
const Produkti = require('../models/Produkti')
const multer  = require('multer')


// parādīt visas preces
router.get("/", (req, res) => {
    Produkti.find()
    .then(produkti => res.json(produkti))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

router.get('/search', async ( req, res) => {
    try {
        const {key, page, limit} = req.query
        const skip = (page - 1) * limit
        const search = key ? {
            '$or': [
                {Nosaukums: {$regex: key, $options: '$i'}},
            ]
        } : {}
        const data = await Produkti.find(search)
        .skip(skip).limit(limit)
        res.json({
            data
        })
    } catch (err) {
        console.log(err)
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'../client/src/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

//  pievienot preci
router.post('/add', upload.single('Attels'), (req, res) => {

	const newProdukti = new Produkti({
        Attels: req.file.originalname,
        Nosaukums: req.body.Nosaukums,
        Apraksts: req.body.Apraksts,
        Krasa: req.body.Krasa,
        Cena: req.body.Cena
    });

    newProdukti
    .save()
    .then(() => res.json('Produkti tika seivoti'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// meklēt produktu pec id
router.get('/:id', (req, res) => {
    Produkti.findById(req.params.id)
    .then (produkti => res.json(produkti))
    .catch(err => res.status(400).json(`Error ${err}`))
})

// meklēt produktu pec id un atjaunot
router.put('/update/:id', (req, res) => {
    Produkti.findById(req.params.id)
    .then ((produkti) => {
        produkti.Nosaukums = req.body.Nosaukums,
        produkti.Apraksts = req.body.Apraksts,
        produkti.Krasa = req.body.Krasa,
        produkti.Cena = req.body.Cena

        produkti
            .save()
            .then(() => res.json('Produkts tika atjaunots'))
            .catch(err => res.status(400).json(`Error: ${err}`))
        
    })
    .catch(err => res.status(400).json(`Error ${err}`))
})

// meklēt produktu pec id un izdzēst to
router.delete('/:id', (req, res) => {
    Produkti.findByIdAndDelete(req.params.id)
        .then(() => res.json('Produkts tika dzēsts'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;