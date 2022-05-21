const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class CategoriaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Categoria");
    this._db = db;
  }

}

module.exports = CategoriaRepository;
