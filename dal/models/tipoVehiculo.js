"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TipoVehiculo extends Model {
    static associate(models) {
      TipoVehiculo.hasMany(models.Vehiculo, {
        foreignKey: "idTipoVehiculo",
        as: "Vehiculo",
      });
      TipoVehiculo.belongsTo(models.Categoria, { as: "categoria", foreignKey: "idCategoria"});
    }
  }
  TipoVehiculo.init(
    {
      marca: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      puertas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: "TipoVehiculo",
    }
  );
  return TipoVehiculo;
};
