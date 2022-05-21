const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { TipoVehiculo } = require("./models");


class TipoVehiculoBusiness extends BaseBusiness {
  constructor({ TipoVehiculoRepository,}) {
    super(TipoVehiculoRepository, TipoVehiculo);
    this._entityRepository = TipoVehiculoRepository;
  }
}

module.exports = TipoVehiculoBusiness;