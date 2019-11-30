// Import the ORM to create functions that will interact with the database.
var orm = require("../configuration/orm.js");

var burger = {
    "all": function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response)
        });
    },

    // The variables cols and vals are arrays.
    "create": function (columns, values, callback) {
        orm.createOne("burgers", columns, values, function (response) {
            callback(response)
        });
    },

    "update": function (objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (response) {
            callback(response)
        });
    },

    "delete": function (id, callback) {
        orm.deleteOne("burgers", id, function (response) {
            callback(response)
        });
    }
};

// Export the database functions for the controller (burger-controller.js).
module.exports = burger;