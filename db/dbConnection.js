const sql = require('mysql2');
require('dotenv').config();
class DbConnection {
	async getConnection(query) {
		try {
			return await sql
				.createConnection({
					user: process.env.user,
					password: process.env.password,
					server: process.env.server,
					database: process.env.database,
				})
				.promise()
				.query(query);
		} catch (error) {
			console.log(error);
		}
	}
}
module.exports = new DbConnection();
