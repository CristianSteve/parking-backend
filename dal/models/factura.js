"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    static associate(models) {
      Factura.belongsTo(models.Tarifa, { as: "tarifa", foreignKey: "idTarifa"});
      Factura.belongsTo(models.Vehiculo, { as: "vehiculo", foreignKey: "idVehiculo"});
    }
  }
  Factura.init(
    {
      fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fechaSalida: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Factura",
    }
  );
  return Factura;
};
