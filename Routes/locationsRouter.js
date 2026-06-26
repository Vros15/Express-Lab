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
router.get("/", (req, res) => {
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


router.post("/", (req, res) => {
    console.log(`Post route hit!`);
    const { name, country, population } = req.body;
    //If any of the required fields are missing, return an error
    if (!name || !country || !population) {
      return res.status(400).json({ error: "Name, country, and population are required" });
    }
    //Add the new location to the array with a unique id
    const newLocation = {
      id: uuid(),
      name,
      country,
      population
    };
    locations.push(newLocation);
    res.status(201).json(newLocation);

});



//export module
module.exports = router;