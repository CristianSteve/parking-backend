const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class TipoVehiculoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TipoVehiculo");
    this._db = db;
  }

}

module.exports = TipoVehiculoRepository;
