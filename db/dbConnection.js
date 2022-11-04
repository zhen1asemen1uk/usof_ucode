const sql = require('mysql2');
require('dotenv').config();
class DbConnection {
	async getConnection(query) {
		try {
			const db = await sql
				.createConnection({
					host: process.env.RDS_HOSTNAME,
					user: process.env.RDS_USERNAME,
					password: process.env.RDS_PASSWORD,
					port: process.env.RDS_PORT,
					database: process.env.RDS_DATABASE,
				})
				.promise()
				.query(query);

			return db;
		} catch (error) {
			console.error(error);
		}
	}
}
module.exports = new DbConnection();
