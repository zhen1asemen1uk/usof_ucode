const sql = require('mysql2');

const config = require('./configDb');

class dbConnection {
   async getConnection(query) {
      try {
         return await sql.createConnection(config).promise().query(query);
      }
      catch (error) {
         console.log(error);
      }
   }
}
module.exports = new dbConnection();