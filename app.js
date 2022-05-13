const express = require("express");
const router = require('./routes/index')

const PORT = 3000;
const IP = '127.0.0.1';

const server = express();
server.use(express.json());
server.use(router)

server.listen(PORT, IP, () => {
   console.log(`Server start on ${PORT} port`)
});