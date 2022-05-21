const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class PerfilRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Profile");
    this._db = db;
  }

  getPerfilUser(id){
    console.log("entro a repository de perfiles")
    return this._db.Profile.findOne({where :{ id }});
  }
}

module.exports = PerfilRepository;
