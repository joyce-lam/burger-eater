//set up mysql connection
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });




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

