const express = require('express');
const router = express.Router();
const newsService = require('./news.service');

// routes

router.get('/', getNews);
router.get('/:id', getPostId);

module.exports = router;

function getNews(req, res, next) {
    newsService.getNews()
        .then(news => res.json(news))
        .catch(next);
}
function getPostId(req, res, next) {
    newsService.getPostId(req.params.id)
        .then(news => res.json(news))
        .catch(next);
}
