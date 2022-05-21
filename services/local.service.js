const BaseService = require("./base.service");

class LocalService extends BaseService {
  constructor({ LocalBusiness }) {
    super(LocalBusiness);
    this._entityBusiness = LocalBusiness;
  }
}

module.exports = LocalService;