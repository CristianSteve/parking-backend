const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class LocalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Local");
    this._db = db;
  }

}

module.exports = LocalRepository;
