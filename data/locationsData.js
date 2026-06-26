//import uuid to generate unique ids for each location
const uuid = require('uuid').v4;

let locations = [
  {
    id: uuid(),
    name: "Seattle",
    country: "USA",
    population: 749000
  },
  {
    id: uuid(),
    name: "Tokyo",
    country: "Japan",
    population: 13900000
  },
  {
    id: uuid(),
    name: "Reykjavik",
    country: "Iceland",
    population: 131000
  },
  {
    id: uuid(),
    name: "Berlin",
    country: "Germany",
    population: 3660000
  },
  {
    id: uuid(),
    name: "Paris",
    country: "France",
    population: 2160000
  }
];

module.exports = locations;