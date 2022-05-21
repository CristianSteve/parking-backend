const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class VehiculoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Vehiculo");
    this._db = db;
  }

}

module.exports = VehiculoRepository;
