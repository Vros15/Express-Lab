const express = require('express');
const uuid = require('uuid').v4;
const _ = require('lodash');

const router = express.Router();

//import data
const locations = require('../data/locationsData');

//GET all locations
router.get('/', (req, res) => {
  res.json(locations);
});



//export module
module.exports = router;