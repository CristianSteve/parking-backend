const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");

//Configuracion ambiente
const config = require("../config/environments");

//Routers
const Routes = require("./routers");
const UserRoutes = require("./routers/user.routes");
const CategoriaRoutes = require("./routers/categoria.routes");

//controllers
const { UserController, CategoriaController } = require("./controllers");

//services
const { UserService, CategoriaService } = require("../services");

//business
const { UserBusiness, CategoriaBusiness } = require("../domain/");

//repositories
const { UserRepository, CategoriaRepository } = require("../dal/repositories");

//db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(Startup).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    CategoriaController: asClass(CategoriaController).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton(),
    CategoriaBusiness: asClass(CategoriaBusiness).singleton(),
  });

module.exports = container;
