const route = require("express").Router();
const DestinationControllers = require("../controller/DestinationControllers");

route.get("/:cityId", DestinationControllers.getAllDestinationByCity);

module.exports = route;