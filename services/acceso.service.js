const BaseService = require("./base.service");

class AccesoService extends BaseService {
  constructor({ AccesoBusiness }) {
    super(AccesoBusiness);
    this._entityBusiness = AccesoBusiness;
  }
}

module.exports = AccesoService;