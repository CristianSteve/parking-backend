"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    static associate(models) {
      Vehiculo.hasMany(models.User, {
        foreignKey: "idProfile",
        as: "User",
      });
      Vehiculo.hasMany(models.Factura, {
        foreignKey: "idVehiculo",
        as: "Factura",
      });
      Vehiculo.belongsTo(models.User, { as: "user", foreignKey: "idUser"});
      Vehiculo.belongsTo(models.TipoVehiculo, { as: "tipoVehiculo", foreignKey: "idTipoVehiculo"});
    }
  }
  Vehiculo.init(
    {
      placa: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Vehiculo",
    }
  );
  return Vehiculo;
};
