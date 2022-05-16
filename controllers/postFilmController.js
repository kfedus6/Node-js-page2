const connection = require('../db');

const postFilm = async (req, res) => {
   connection.connect(error => {
      if (error) {
         res.status(505).json({ 'status': 'error', 'message': error.message })
         return false;
      }
   })

   const sql = `INSERT INTO film VALUES(${req.body.id},"${req.body.title}",${req.body.genre_id})`;
   connection.query(sql, (error, result) => {
      if (error) {
         res.status(400).json({ 'status': 'error', 'message': error.message })
         return false;
      } else {
         res.status(200).json({ 'status': 'ok', 'film': result })
      }
   })
};

module.exports = postFilm;