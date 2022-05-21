const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");

//Configuracion ambiente
const config = require("../config/environments");

//Routers
const Routes = require("./routers");
const UserRoutes = require("./routers/user.routes");

//controllers
const { UserController } = require("./controllers");

//services
const { UserService } = require("../services");

//business
const { UserBusiness } = require("../domain/");

//repositories
const { UserRepository } = require("../dal/repositories");

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
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton(),
  });

module.exports = container;
