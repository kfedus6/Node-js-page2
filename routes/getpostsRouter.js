const Router = require("express");
const router = new Router;
const getPosts = require('../controllers/getpostsController');

router.get('/posts', getPosts);

module.exports = router;