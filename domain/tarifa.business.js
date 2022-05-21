const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Tarifa } = require("./models");


class TarifaBusiness extends BaseBusiness {
  constructor({ TarifaRepository,}) {
    super(TarifaRepository, Tarifa);
    this._entityRepository = TarifaRepository;
  }
}

module.exports = TarifaBusiness;