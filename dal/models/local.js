"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Local extends Model {
    static associate(models) {
      Local.hasMany(models.Tarifa, {
        foreignKey: "idLocal",
        as: "Tarifa",
      });
    }
  }
  Local.init(
    {
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Local",
    }
  );
  return Local;
};
