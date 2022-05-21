const BaseService = require("./base.service");

class TipoVehiculoService extends BaseService {
  constructor({ TipoVehiculoBusiness }) {
    super(TipoVehiculoBusiness);
    this._entityBusiness = TipoVehiculoBusiness;
  }
}

module.exports = TipoVehiculoService;