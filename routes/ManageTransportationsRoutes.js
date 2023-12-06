const route = require("express").Router();
const ManageTransportationsControllers = require("../controller/ManageTransportationsControllers");

route.get("/:destinationId", ManageTransportationsControllers.getAllManageTransportationsByDestinationId);

module.exports = route;