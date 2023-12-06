const { Booking, City, Destination, Transportation } = require("../models");

class BookingController {
    static async createBooking(req, res) {
        try {
            const {name, phone_number, CityId, DestinationId, TransportationId, DateDeparture, Passanger} = req.body;

            const checkCity = await City.findByPk(CityId);

            if(!checkCity) {
                throw {
                    field: "CityId",
                    code: 404,
                    message: "City not found."
                }
            }

            const checkDestination = await Destination.findByPk(DestinationId);

            if(!checkDestination) {
                throw {
                    field: "DestinationId",
                    code: 404,
                    message: "Destination not found."
                }
            }

            const checkTransportation = await Transportation.findByPk(TransportationId);

            if(!checkTransportation) {
                throw {
                    field: "TransportationId",
                    code: 404,
                    message: "Transportation not found."
                }
            }
            
            const data = await Booking.create({
                name,
                phone_number,
                CityId,
                DestinationId,
                TransportationId,
                DateDeparture,
                Passanger,
            });

            res.status(201).json({
                code: 201,
                message: "Booking Ticket Anda Telah Berhasil Ditambahkan",
            });
        }catch(error){
            if (error.name === "SequelizeValidationError") {
                const validationErrors = error.errors.map((err) => ({
                    field: err.path,
                    message: err.message,
                }));
                res.status(422).json({code: 422, errors:validationErrors });
            } else {
                res.status(error.code||500).json({code: error.code || 500, message: error.message });
            }
        }
    }

    static async getAllBooking(req, res) {
        try {
            const booking = await Booking.findAll({
                include : [
                    {
                        model: City,
                    },{
                        model: Destination
                    }, {
                        model: Transportation
                    }
                ]
            });
            res.status(200).json({ data:booking });
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
    }

    static async getBookingById(req, res) {
        try {
            const { bookingId } = req.params;
            const booking = await Booking.findOne({
            where: {
                id: bookingId,
            },
        });
            res.status(200).json({ data: booking });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BookingController;
