const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class AccesoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Acceso");
    this._db = db;
  }

}

module.exports = AccesoRepository;
