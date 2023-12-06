const route = require("express").Router();
const CityControllers = require("../controller/CityControllers");

route.get("/", CityControllers.getAllCity);

module.exports = route;