const express = require('express');
const router = express.Router();
const skillsService = require('./skills.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    skillsService.getAll()
        .then(users => res.json(users))
        .catch(next);
}
