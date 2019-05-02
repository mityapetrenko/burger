var express=require("express");
var router = express.Router();
var burger=require("../models/burgers");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  router.post("/api/burgers", function(req, res) {
    //console.log(req)
    var devoured = 0
    if (req.body.devoured == "true"){
      devoured = 1;
    }

    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    var devoured = 1
    if (req.body.devoured == "true"){
      devoured = 1;
    }
    console.log("condition", condition);
  
    burger.update({
     devoured: devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  
  // Export routes for server.js to use.
  module.exports = router;

