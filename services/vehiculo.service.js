const BaseService = require("./base.service");

class VehiculoService extends BaseService {
  constructor({ VehiculoBusiness }) {
    super(VehiculoBusiness);
    this._entityBusiness = VehiculoBusiness;
  }
}

module.exports = VehiculoService;