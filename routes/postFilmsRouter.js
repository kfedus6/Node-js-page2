const Router = require('express');
const router = new Router;

const postFilm = require('../controllers/postFilmController');

router.post('/addfilm', postFilm);

module.exports = router;
