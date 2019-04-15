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
    });