const BaseService = require("./base.service");

class CategoriaService extends BaseService {
  constructor({ CategoriaBusiness }) {
    super(CategoriaBusiness);
    this._entityBusiness = CategoriaBusiness;
  }
}

module.exports = CategoriaService;