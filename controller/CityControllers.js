const { City } = require("../models");

class CityControllers {
    static async getAllCity(req, res) {
        try {
            const city = await City.findAll();
            res.status(200).json({ status: true, data:city });
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
    }
}

module.exports = CityControllers;