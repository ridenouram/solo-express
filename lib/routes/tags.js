const { Router } = require('express');
const Tag = require('../models/Tag');

module.exports = Router ()
    .post('/', (req, res) => {
        const { name } = req.body;

        Tag
            .create({ name })
            .then(tag => {
                res.send(tag);
            });
    })

    .get('/', (req, res) => {
        Tag
            .find()
            .then(tags => res.send(tags));
    })

    .get('/:id', (req, res) => {
        Tag
            .findById(req.params.id)
            .then(tag => res.send(tag));
    })

    .put('/:id', (req, res) => {
        const { name } = req.body;
        
        Tag
            .findByIdAndUpdate(req.params.id, { name })
            .then(tag => res.send(tag));
    })

    .delete('/:id', (req, res) => {
        Tag 
            .findByIdAndDelete(req.params.id)
            .then(result => res.send(result));
    });
