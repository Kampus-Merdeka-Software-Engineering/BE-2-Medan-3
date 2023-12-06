const { ManageTransportation, Transportation } = require("../models");

class ManageTransportationControllers {
    static async getAllManageTransportationsByDestinationId(req, res) {
        try {
            const {
                destinationId
            } = req.params;
            const transportation = await ManageTransportation.findAll({
                where:{
                    DestinationId: destinationId
                },
                include: {
                    model: Transportation,
                },
            });
            res.status(200).json({ data: transportation });
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
    }
}

module.exports = ManageTransportationControllers;
