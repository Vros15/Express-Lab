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

/*
PUT: Update an existing landmark by ID

Name, city, and yearBuilt are optional fields. If the landmark is not found, return an error.
Example:
PUT /landmarks/:id
*/

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, city, yearBuilt } = req.body;
    // Find the landmark by ID
    const landmark = landmarks.find(l => l.id === id);
    if (!landmark) {
        return res.status(404).json({ error: 'Landmark not found' });
    }

    // Update the landmark with the provided fields
    if (name) landmark.name = name;
    if (city) landmark.city = city;
    if (yearBuilt) landmark.yearBuilt = yearBuilt;

    res.json(landmark);
});

module.exports = router;