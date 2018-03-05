//set up mysql connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "fv8qupjms2rwzjx9",
		database: "y1y4d5j8hle98330"
	});
}

connection.connect();

module.exports = connection;

