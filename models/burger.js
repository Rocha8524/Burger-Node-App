// Import the ORM to create functions that will interact with the database.
var burgerOrm = require("../configuration/orm.js");

var burger = {
    "all": function (callback) {
        burgerOrm.selectAll("burgers", callback);
    },

    // The variables cols and vals are arrays.
    "create": function (columns, values, callback) {
        burgerOrm.createOne("burgers", columns, values, callback);
    },

    "update": function (objColVals, condition, callback) {
        burgerOrm.updateOne("burgers", objColVals, condition, callback);
    },

    "delete": function (id, callback) {
        burgerOrm.deleteOne("burgers", id, callback);
    }
};

// Export the database functions for the controller (burger-controller.js).
module.exports = burger;