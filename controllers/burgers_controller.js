var express=require("express");
var burger=require("../models/burgers");
var router = express.Router();

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
  s
  router.post("/api/burger", function(req, res) {
    burger.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
    router.delete("/api/cats/:id", function(req, res) {
      var condition = "id = " + req.params.id;
    
      console.log("condition", condition);
    
  });
});
  
  // Export routes for server.js to use.
  module.exports = router;