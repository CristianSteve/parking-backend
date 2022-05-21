'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Vehiculo, {
        foreignKey: "idUser",
        as: "Vehiculo",
      });
      User.belongsTo(models.Profile, { as: "profile", foreignKey: "idProfile"});
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    cedula : {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "cedula_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    direccion: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "celular_UNIQUE"
    },
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};