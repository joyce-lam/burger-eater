//import mysql connection
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


var orm = {
	all: function(table, cb) {
		var query = "SELECT * FROM " + table + ";"
		connection.query(query, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		}); 
	},
	create: function(table, cols, vals, cb) {
		var query = "INSERT INTO " + table;
		query += " (" ;
		query += cols.toString();
		query += ") ";
	    query += "VALUES (";
	    query += printQuestionMarks(vals.length);
	    query += ") "; 

	    console.log(query);

	    connection.query(query, vals, function(err, result) {
	    	if (err) {
	    		throw err;
	    	} 
	    	cb(result);
	    });
	},
	update: function(table, colVal, condition, cb) {
		var query = "UPDATE " + table;
		query += " SET ";
		query += objToSql(colVal);
		query += " WHERE ";
		query += condition;

		console.log(query);

		connection.query(query, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};


module.exports = orm;


