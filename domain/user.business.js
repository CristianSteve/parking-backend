const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { User } = require("./models");

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository,}) {
    super(UserRepository, User);
    this._entityRepository = UserRepository;
/*     this._entityCodeRepository = CodeUserRepository;
    this._Auth = Auth;
    this._entityPerfil = PerfilRepository;
    this._config = config; */
  }

/*   async getToken(username, password) {
    console.log("entro", username, password)
    const entities = await this._entityRepository.authUser(username, password);
    if (!entities) return {status: "409", codeError : "ATH001", description : "Credenciales no validos"};
    const data = mapper(UserAuth, entities.toJSON());
    const perfil = await this._entityPerfil.getPerfilUser(data.idProfile);
    const perfilUser = mapper(Perfil, perfil.toJSON());
    await this._Auth.createToken(data.username, data.email, data.nombre).then(e=> {data.token = e; data.tipo = perfilUser.tipo})
    console.log(data)
    return data;
  } */

/*   async getCode(entity){
    const codeUser = mapper(CodeUser, entity);

    const code =  await this._entityCodeRepository.create(codeUser);
    return mapper(CodeUser, code.toJSON());
  } */
}

module.exports = UserBusiness;