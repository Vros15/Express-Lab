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

/*
POST: Add a new location
Name, country, and population are required fields. If any are missing, return an error.
*/
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

/*
PUT: Update an existing location by ID
Name, country, and population are optional fields. If the location is not found, return an error.
Example:
PUT /locations/:id
    {name: "New Name",
    population: 500000
    } - Only updates the name and population, leaving country unchanged
*/
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, country, population } = req.body;
    //Find the location by id
    const location = locations.find(loc => loc.id === id);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    //Update the location with new data
    if (name) location.name = name;
    if (country) location.country = country;
    if (population) location.population = population;

    res.json(location);
});


/*
DELETE: Remove a location by ID
Example:
DELETE /locations/:id
*/
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = locations.findIndex(loc => loc.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Location not found" });
    }

    // Remove the location from the array
    const deletedLocation = locations.splice(index, 1);
    
    console.log(`Deleted location:`, deletedLocation[0]);
    res.status(200).json(deletedLocation[0]);
});


//export module
module.exports = router;