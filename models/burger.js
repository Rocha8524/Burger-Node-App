// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burger", function (response) {
            callback(response);
        });
    },
    // The variables columns and values are arrays.
    create: function (columns, values, callback) {
        orm.create("burger", columns, values, function (response) {
            callback(response);
        });
    },
    // Update function for burger
    update: function (objColVals, condition, callback) {
        orm.update("burger", objColVals, condition, function (response) {
            callback(response);
        });
    },
    // Delete function for burger
    delete: function (id, callback) {
        orm.delete("burger", id, callback, function (response) {
            callback(response);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
