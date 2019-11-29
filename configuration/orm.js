// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objectToSql(ob) {
    var array = [];

    // Loop through the keys and push the key/value as a string int arr
    for (var key in object) {
        var value = ob[key];

        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {

            // If string has spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }

    // Translate array of strings to a single comma-separated string
    return array.toString();
}

// Object for all our SQL statement functions.
var burgerOrm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function (table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, valuess, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },

    // Delete table from database and website
    deleteOne: function (table_name, id, callback) {
        var sql_command = `DELETE FROM ${table_name} WHERE id = ${id}`;
        console.log(sql_command);

        connection.query(sql_command, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = burgerOrm;
