const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class TarifaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Tarifa");
    this._db = db;
  }

}

module.exports = TarifaRepository;
