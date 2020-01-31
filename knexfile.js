// Update with your config settings.
require('dotenv').config()

module.exports = {
	client: 'pg',
	connection: process.env.SSL
		? `${process.env.DATABASE_URL}?ssl=true`
		: process.env.DATABASE_URL,
	migrations: {
		tableName: 'migrations',
	},
}
