const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class FacturaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Factura");
    this._db = db;
  }

}

module.exports = FacturaRepository;
