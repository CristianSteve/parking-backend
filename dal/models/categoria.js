"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.TipoVehiculo, {
        foreignKey: "idCategoria",
        as: "TipoVehiculo",
      });
    }
  }
  Categoria.init(
    {
      tipo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categoria",
    }
  );
  return Categoria;
};
