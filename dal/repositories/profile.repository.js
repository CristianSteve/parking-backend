const BaseRepository = require("./base.repository");
//const {Op} = require('sequelize');


class ProfileRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Profile");
    this._db = db;
  }

}

module.exports = ProfileRepository;
