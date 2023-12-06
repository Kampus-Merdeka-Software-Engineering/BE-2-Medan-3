'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManageTransportation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Transportation, {foreignKey: "TransportationId"});
      this.belongsTo(models.Destination, {foreignKey: "DestinationId"});
    }
  }
  ManageTransportation.init({
    DestinationId: DataTypes.INTEGER,
    TransportationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ManageTransportation',
  });
  return ManageTransportation;
};