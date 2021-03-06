const connection = require('../db');

const getPosts = async (req, resp) => {

   const { author } = req.query

   connection.connect(error => {
      if (error) {
         resp.status(505).json({ "status": 'error' })
         return false
      }
   })

   const sqlGetAuthor = `SELECT id FROM author WHERE name = '${author}'`;
   connection.query(sqlGetAuthor, (error, res) => {
      if (error) {
         resp.status(500).json({ 'status': 'error' })
         return false;
      } else if (res[0] === undefined) {
         resp.status(404).json({ 'status': 'error', 'message': 'not Found' })
         return false;
      }
      const { id } = res[0]
      const sql = `SELECT * FROM post WHERE author_id = ${id}`
      connection.query(sql, (error, res) => {
         if (error) {
            resp.status(500).json({ 'status': 'error' })
            return false;
         }
         resp.status(200).json({ 'status': 'ok', 'post': res })
      })
   })
};

module.exports = getPosts;

//ORM

