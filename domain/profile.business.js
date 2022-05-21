const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Profile } = require("./models");


class ProfileBusiness extends BaseBusiness {
  constructor({ ProfileRepository,}) {
    super(ProfileRepository, Profile);
    this._entityRepository = ProfileRepository;
  }
}

module.exports = ProfileBusiness;