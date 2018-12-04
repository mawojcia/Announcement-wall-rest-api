const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/announcement');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    const product = new Announcement({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    announcement.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: announcement
    });
});

router.get('/:announcementId', (req, res, next) => {
    const id = req.params.announcementId;
    Announcement.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error: err})
    });

});

router.patch('/:announcementId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated announcement!'
    });
});

router.delete('/:announcementId', (req, res, next) => {
    res.status(200).json({
        message: 'announcement deleted!'
    });
});

module.exports = router;