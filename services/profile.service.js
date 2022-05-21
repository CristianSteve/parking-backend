const BaseService = require("./base.service");

class ProfileService extends BaseService {
  constructor({ ProfileBusiness }) {
    super(ProfileBusiness);
    this._entityBusiness = ProfileBusiness;
  }
}

module.exports = ProfileService;