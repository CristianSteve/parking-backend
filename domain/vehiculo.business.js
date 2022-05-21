const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Vehiculo } = require("./models");


class VehiculoBusiness extends BaseBusiness {
  constructor({ VehiculoRepository,}) {
    super(VehiculoRepository, Vehiculo);
    this._entityRepository = VehiculoRepository;
  }
}

module.exports = VehiculoBusiness;