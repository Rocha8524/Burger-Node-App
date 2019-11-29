// Import the ORM to create functions that will interact with the database.
var orm = require("../configuration/orm.js");

var burger = {
    "all": function (callback) {
        orm.all("burgers", callback);
    },

    // The variables cols and vals are arrays.
    "create": function (columns, values, callback) {
        orm.create("burgers", columns, values, callback);
    },

    "update": function (objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, callback);
    },

    "delete": function (id, callback) {
        orm.delete("burgers", id, callback);
    }
};

// Export the database functions for the controller (burger-controller.js).
module.exports = burger;