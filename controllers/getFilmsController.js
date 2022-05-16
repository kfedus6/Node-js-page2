const connection = require("../db");

const getFilms = async (req, res) => {

   connection.connect(error => {
      if (error) {
         res.status(505).json({ 'status': 'error' })
         return false
      }
   })

   const sql = 'SELECT * FROM film';
   connection.query(sql, (error, result) => {
      if (error) {
         res.status(500).json({ 'status': 'error' })
         return false;
      } else {
         res.status(200).json({ 'status': 'ok', 'film': result })
      }
   })
};

module.exports = getFilms;