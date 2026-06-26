const express = require('express');
const uuid = require('uuid').v4;
const _ = require('lodash');

const router = express.Router();

//import data
const locations = require('../data/locationsData');


/*
Get all Locations
Supports optional query parameters for sorting:
Example:
GET /locations?sortBy=name&order=asc
GET /locations?sortBy=population&order=desc
*/
router.get("/locations", (req, res) => {
  const { sortBy, order } = req.query;

  // Create a copy so the original array isn't modified
  let results = [...locations];

  // Sort if sortBy is provided
  if (sortBy === "name" || sortBy === "population") {
    results = _.sortBy(results, sortBy);

    // Reverse if descending order is requested
    if (order === "desc") {
      results.reverse();
    }
  }
  res.json(results);
});


router.post("/locations", (req, res) => {


});



//export module
module.exports = router;