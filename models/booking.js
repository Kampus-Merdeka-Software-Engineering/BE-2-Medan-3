'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {foreignKey: "CityId"});
      this.belongsTo(models.Destination, {foreignKey: "DestinationId"});
      this.belongsTo(models.Transportation, {foreignKey: "TransportationId"});
    }
  }
  Booking.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "Name be not null."
        },
        notEmpty: {
          msg: "Name be required."
        }
      }
    },
    phone_number: { 
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Phone number be not null."
        },
        notEmpty: {
          msg: "Phone number be required."
        }
      }
    },
    CityId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "City be not null."
        },
        notEmpty: {
          msg: "City be required."
        }
      }
    },
    DestinationId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Destination be not null."
        }
      },
      notEmpty: {
        msg: "Destination be required."
      }
    },
    TransportationId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Transportation be not null."
        },
        notEmpty: {
          msg: "Transportation be required."
        }
      }
    },
    DateDeparture: {
      type:DataTypes.DATE,
      allowNull:  false,
      validate: {
        notNull: {
          msg: "Date departure be not null."
        },
        notEmpty: {
          msg: "Date departure be required"
        }
      }
    },
    Passanger: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Passanger be not null."
        },
        notEmpty: {
          msg: "Passanger be required."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};