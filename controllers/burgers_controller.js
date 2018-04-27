var express = require("express");

var router = express.Router();

var bgr = require("../models/burgers.js");

router.get("/", function(req, res) {
    bgr.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("get fuction ran",hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function(req, res) {
    bgr.insertOne("burger_name", req.body.burger_name, function(result) {
        console.log("hello");
        var newBurgObj = {
            burgers: result
        }
        console.log(newBurgObj)
        res.send(newBurgObj);
    });
});

router.put("/burger/:id", function(req, res) {
    var burgerId = req.params.id;
    bgr.updateOne("devoured", "TRUE", burgerId, function(result) {
        if (result.changedRows === 0 ) {
            return res.status(404).end();
        }
        
        res.status(200).end();
    });
});

module.exports = router;