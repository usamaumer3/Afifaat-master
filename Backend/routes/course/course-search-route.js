var express = require("express");
var router = express.Router();
const { paginatedResults } = require("./course-helper-methods");

const Course = require("@models/course/course-model");

router.get(
    "", //route name
    (req, res, next) => {
      //first middleware for search
      const searchObj = {};
  
      if (req.query.name) {
        searchObj.name = new RegExp(`${req.query.name}`, "i");
      }
      if (req.query.language) {
        searchObj.language = req.query.language;
      }
      if (req.query.minPrice && req.query.maxPrice) {
        searchObj.price = {
          $lte: req.query.maxPrice,
          $gte: req.query.minPrice,
        };
      }
  
      res.locals.searchObj = searchObj;
      next();
    },
    paginatedResults(Course), //second middleware for pagination
    (req, res) => {
      res.status(200).send(res.paginatedResults);
    }
  );

module.exports = router;
