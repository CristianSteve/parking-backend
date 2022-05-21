const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");

//Configuracion ambiente
const config = require("../config/environments");

//Routers
const Routes = require("./routers");
const AccesoRoutes = require("./routers/categoria.routes");
const CategoriaRoutes = require("./routers/categoria.routes");
const FacturaRoutes = require("./routers/categoria.routes");
const LocalRoutes = require("./routers/categoria.routes");
const ProfileRoutes = require("./routers/categoria.routes");
const TarifaRoutes = require("./routers/categoria.routes");
const TipoVehiculoRoutes = require("./routers/categoria.routes");
const UserRoutes = require("./routers/user.routes");
const VehiculoRoutes = require("./routers/categoria.routes");

//controllers
const { UserController,AccesoController, CategoriaController, FacturaController,LocalController,ProfileController,TarifaController,TipoVehiculoController,VehiculoController} = require("./controllers");

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
    AccesoRoutes: asFunction(AccesoRoutes).singleton(),
    AccesoController: asClass(AccesoController).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    CategoriaController: asClass(CategoriaController).singleton(),
    FacturaRoutes: asFunction(FacturaRoutes).singleton(),
    FacturaController: asClass(FacturaController).singleton(),
    LocalRoutes: asFunction(LocalRoutes).singleton(),
    LocalController: asClass(LocalController).singleton(),
    ProfileRoutes: asFunction(ProfileRoutes).singleton(),
    ProfileController: asClass(ProfileController).singleton(),
    TarifaRoutes: asFunction(TarifaRoutes).singleton(),
    TarifaController: asClass(TarifaController).singleton(),
    TipoVehiculoRoutes: asFunction(TipoVehiculoRoutes).singleton(),
    TipoVehiculoController: asClass(TipoVehiculoController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
    VehiculoRoutes: asFunction(VehiculoRoutes).singleton(),
    VehiculoController: asClass(VehiculoController).singleton(),
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
