const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User");
    this._db = db;
  }

  authUser(username, password){
    return this._db.User.findOne({ where: { [Op.and] : [{username}, {password}]}});
  }
}

module.exports = UserRepository;
