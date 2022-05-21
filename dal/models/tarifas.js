"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tarifa extends Model {
    static associate(models) {
      Tarifa.hasMany(models.Factura, {
        foreignKey: "idTarifa",
        as: "Factura",
      });
      Tarifa.belongsTo(models.Local, { as: "local", foreignKey: "idLocal"});
    }
  }
  Tarifa.init(
    {
      tipoAutomotor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      valorMinuto: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      valorDia: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      valorMes: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tarifa",
    }
  );
  return Tarifa;
};
