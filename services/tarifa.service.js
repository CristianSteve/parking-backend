const BaseService = require("./base.service");

class TarifaService extends BaseService {
  constructor({ TarifaBusiness }) {
    super(TarifaBusiness);
    this._entityBusiness = TarifaBusiness;
  }
}

module.exports = TarifaService;