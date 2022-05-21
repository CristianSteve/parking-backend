const BaseBusiness = require("./base.business");
//const mapper = require("automapper-js");
const { Categoria } = require("./models");


class UserBusiness extends BaseBusiness {
  constructor({ CategoriaRepository,}) {
    super(CategoriaRepository, Categoria);
    this._entityRepository = CategoriaRepository;
  }
}

module.exports = UserBusiness;