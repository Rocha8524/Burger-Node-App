var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (request, response) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.create([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        response.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: request.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

router.delete("/:id", function (request, response) {
    burger.deleteOne(request.params.id, function () {
        response.json("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
