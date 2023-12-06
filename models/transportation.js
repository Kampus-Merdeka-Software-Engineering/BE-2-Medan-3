'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ManageTransportation, {foreignKey: "TransportationId"});
      this.hasMany(models.Booking, {foreignKey: "CityId"});
    }
  }
  Transportation.init({
    types_of_transportation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transportation',
  });
  return Transportation;
};