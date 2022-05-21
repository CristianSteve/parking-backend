"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TipoVehiculo extends Model {
    static associate(models) {
      TipoVehiculo.hasMany(models.Vehiculo, {
        foreignKey: "idTipoVehiculo",
        as: "Vehiculo",
      });
    }
  }
  TipoVehiculo.init(
    {
      marca: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TipoVehiculo",
    }
  );
  return TipoVehiculo;
};
