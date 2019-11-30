// Import the ORM to create functions that will interact with the database.
var burgerOrm = require("../configuration/orm.js");

var burger = {
    "all": function (callback) {
        burgerOrm.all("burgers", function (response) {
            callback(response)
        });
    },

    // The variables cols and vals are arrays.
    "create": function (columns, values, callback) {
        burgerOrm.create("burgers", columns, values, function (response) {
            callback(response)
        });
    },

    "update": function (objColVals, condition, callback) {
        burgerOrm.update("burgers", objColVals, condition, function (response) {
            callback(response)
        });
    },

    "delete": function (id, callback) {
        burgerOrm.delete("burgers", id, function (response) {
            callback(response)
        });
    }
};

// Export the database functions for the controller (burger-controller.js).
module.exports = burger;