const route = require("express").Router();

route.get("/", (req,res) => {
    res.send("Final project kelompok 2");
});

const bookingRoutes = require("./BookingRoutes"); 
route.use("/bookings", bookingRoutes);

const destinationRoutes = require("./DestinationRoutes"); 
route.use("/destinations", destinationRoutes);

const cityRoutes = require("./CityRoutes"); 
route.use("/cities", cityRoutes);

const manageTransportationRoutes = require("./ManageTransportationsRoutes"); 
route.use("/transportations", manageTransportationRoutes);

const contactUsRoutes = require("./ContactUsRoutes"); 
route.use("/contactus", contactUsRoutes);

// export route
module.exports = route;