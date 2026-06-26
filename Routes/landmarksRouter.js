const express = require('express');
const _ = require('lodash');
const uuid = require('uuid').v4;

const router = express.Router();

//import data
const landmarks = require('../data/landmarksData');


/*
GET all landmarks
Supports optional query parameters for sorting:
Example:
GET /landmarks?sortBy=name&order=asc
GET /landmarks?sortBy=yearBuilt&order=desc
*/
router.get('/', (req, res) => {
    
    const {sortBy, order} = req.query;

    // Create a copy of the landmarks array to avoid modifying the original
    let results = [...landmarks];

    // Sort if sortBy is provided
    if (sortBy === 'name' || sortBy === 'yearBuilt') {
        results = _.sortBy(results, sortBy);

        // Reverse if descending order is requested
        if (order === 'desc') {
            results.reverse();
        }
    }

    res.json(results);
});

/*
POST:
Add a new landmark
Name, city, and yearBuilt are required fields. If any are missing, return an error.
*/
router.post('/', (req, res) => {
    const { name, city, yearBuilt } = req.body;
    // If any of the required fields are missing, return an error
    if (!name || !city || !yearBuilt) {
        return res.status(400).json({ error: 'Name, city, and yearBuilt are required' });
    }  
    // Add the new landmark to the array with a unique id
    const newLandmark = {
        id: uuid(),
        name,
        city,
        yearBuilt
    };
    landmarks.push(newLandmark);
    res.status(201).json(newLandmark);
});



module.exports = router;