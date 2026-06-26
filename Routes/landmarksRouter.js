const express = require('express');
const router = express.Router();
const _ = require('lodash');

//import data
const landmarks = require('../data/landmarksData');

const uuid = require('uuid').v4;

//GET all landmarks
router.get('/', (req, res) => {
  res.json(landmarks);
});



module.exports = router;