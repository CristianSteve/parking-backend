"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Acceso extends Model {
    static associate(models) {
      Acceso.hasMany(models.Profile, {
        foreignKey: "idAcceso",
        as: "Profile",
      });
    }
  }
  Acceso.init(
    {
      crearUsuario: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      crearFactura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      crearTipoVehiculo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      modificarUsuario: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      modificarFactura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      listarUsuario: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      listarFactura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Acceso",
    }
  );
  return Acceso;
};
