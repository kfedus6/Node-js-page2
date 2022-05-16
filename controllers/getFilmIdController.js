const connection = require('../db');

const getFilmsId = async (req, res) => {

   connection.connect(error => {
      if (error) {
         res.status(505).json({ 'status': 'error' })
         return false;
      }
   })

   const { title } = req.query;
   const sqlGenreId = `SELECT id FROM genre WHERE tittle="${title}"`;
   connection.query(sqlGenreId, (error, result) => {
      if (error) {
         res.status(500).json({ 'status': 'error' })
         return false;
      } else if (result[0] === undefined) {
         res.status(404).json({ 'status': 'error', 'message': 'Not Found' })
         return false;
      }
      const { id } = result[0];
      const sql = `SELECT * FROM film WHERE genre_id="${id}"`;
      connection.query(sql, (error, result) => {
         if (error) {
            res.status(500).json({ 'status': 'error' })
            return false;
         } else {
            res.status(200).json({ 'status': 'ok', 'film': result })
         }
      })
   })
};

module.exports = getFilmsId;