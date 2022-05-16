const Router = require("express");
const router = new Router;

const getFilms = require('../controllers/getFilmsController');
const getFilm = require('../controllers/getFilmController');
const getFilmId = require('../controllers/getFilmIdController');

router.get('/films', getFilms);
router.get('/film', getFilm);
router.get('/filmsid', getFilmId);

module.exports = router;