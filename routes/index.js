const Router = require('express');
const router = new Router();

const getpostsRouter = require('./getpostsRouter');
const getFilmsRouter = require('./getFilmsRouter');
const postFilmsRouter = require('./postFilmsRouter');

router.use('/get', getpostsRouter) //   localhost:8000/get/posts
router.use('/get', getFilmsRouter)
router.use('/post', postFilmsRouter)

module.exports = router;

