/* Import Required Modules
EXPRESS: A web application framework for Node.js, used to create server-side applications and APIs.
MORGAN: A HTTP request logger middleware for Node.js, used to log incoming requests to the server.
LODASH: A JavaScript utility library that provides various functions for common programming tasks, such as manipulating arrays and objects.
UUID: A library for generating unique identifiers, often used to create unique IDs for resources in a database or API.

*/
const express = require("express");
const logger = require("morgan");
const _ = require("lodash");
const uuid = require("uuid").v4;


// Import Data (if needed)
const locations = require("./data/locationsData");
const landmarks = require("./data/landmarksData");


// Import Routers
const locationsRouter = require("./Routes/locationsRouter");
const landmarksRouter = require("./Routes/landmarksRouter");


// Create Express Application
const app = express();


// Middleware
app.use(logger("dev"));
app.use(express.json());


// Routes
app.use("/locations", locationsRouter);
app.use("/landmarks", landmarksRouter);


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});