const Router = require('express');
const router = new Router()

const getpostsRouter = require('./getpostsRouter')

router.use('/get', getpostsRouter) //   localhost:8000/get/posts

module.exports = router;

