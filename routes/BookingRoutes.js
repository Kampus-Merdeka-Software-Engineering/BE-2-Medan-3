const route = require("express").Router();
const BookingController = require("../controller/BookingControllers");

// routing untuk membuat buku
route.post("/", BookingController.createBooking);
// routing untuk menampilkan semua buku
route.get("/", BookingController.getAllBooking);
// routing untuk menampilkan buku berdasarkan id
route.get("/:bookingId", BookingController.getBookingById);

// export route
module.exports = route;