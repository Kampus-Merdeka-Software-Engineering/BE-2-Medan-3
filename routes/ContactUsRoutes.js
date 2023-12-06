const route = require("express").Router();
const ContactUsControllers = require("../controller/ContactUsControllers");

route.post("/", ContactUsControllers.createContactUs);
route.get("/", ContactUsControllers.getAllContactUs);

module.exports = route;