const BaseService = require("./base.service");

class FacturaService extends BaseService {
  constructor({ FacturaBusiness }) {
    super(FacturaBusiness);
    this._entityBusiness = FacturaBusiness;
  }
}

module.exports = FacturaService;