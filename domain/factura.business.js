const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Factura } = require("./models");


class FacturaBusiness extends BaseBusiness {
  constructor({ FacturaRepository,}) {
    super(FacturaRepository, Factura);
    this._entityRepository = FacturaRepository;
  }
}

module.exports = FacturaBusiness;