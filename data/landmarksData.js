//import uuid to generate unique ids for each location
const uuid = require('uuid').v4;


let landmarks = [
  {
    id: uuid(),
    name: "Eiffel Tower",
    city: "Paris",
    yearBuilt: 1889
  },
  {
    id: uuid(),
    name: "Louvre Museum",
    city: "Paris",
    yearBuilt: 1793
  },
  {
    id: uuid(),
    name: "Statue of Liberty",
    city: "New York City",
    yearBuilt: 1886
  },
  {
    id: uuid(),
    name: "Central Park",
    city: "New York City",
    yearBuilt: 1857
  },
  {
    id: uuid(),
    name: "Colosseum",
    city: "Rome",
    yearBuilt: 80
  },
  {
    id: uuid(),
    name: "Pantheon",
    city: "Rome",
    yearBuilt: 126
  },
  {
    id: uuid(),
    name: "Tokyo Tower",
    city: "Tokyo",
    yearBuilt: 1958
  },
  {
    id: uuid(),
    name: "Meiji Shrine",
    city: "Tokyo",
    yearBuilt: 1920
  }
];

module.exports = landmarks;