// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burger", function(response) {
        callback(response);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burger", cols, vals, function(response) {
      callback(response);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burger", objColVals, condition, function(response) {
      callback(response);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
