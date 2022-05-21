"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.hasMany(models.User, {
        foreignKey: "idProfile",
        as: "User",
      });
    }
  }
  Profile.init(
    {
      nombre: {
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
      modelName: "Profile",
    }
  );
  return Profile;
};
