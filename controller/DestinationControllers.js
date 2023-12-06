const { Destination } = require("../models");

class DestinationControllers {
    static async getAllDestinationByCity(req, res) {
        try {
            const {
                cityId
            } = req.params;
            const destination = await Destination.findAll({
                where:{
                    CityId:cityId
                }
            });
            res.status(200).json({ data:destination });
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
    }
}

module.exports = DestinationControllers;
