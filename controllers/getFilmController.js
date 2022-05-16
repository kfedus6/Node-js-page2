const connection = require('../db');

const getFilm = async (req, res) => {

   const { title } = req.query;

   connection.connect(error => {
      if (error) {
         res.status(505).json({ 'status': 'error' })
         return false;
      }
   })

   const sql = `SELECT * FROM film WHERE tittle = "${title}"`;
   connection.query(sql, (error, result) => {
      if (error) {
         res.status(400).json({ 'status': 'error' })
         return false;
      } else {
         res.status(200).json({ 'status': 'ok', 'film': result })
      }
   })
};

module.exports = getFilm;