const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Local } = require("./models");


class LocalBusiness extends BaseBusiness {
  constructor({ LocalRepository,}) {
    super(LocalRepository, Local);
    this._entityRepository = LocalRepository;
  }
}

module.exports = LocalBusiness;