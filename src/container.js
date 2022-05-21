const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");

//Configuracion ambiente
const config = require("../config/environments");

//Routers
const Routes = require("./routers");
const AccesoRoutes = require("./routers/acceso.routes");
const CategoriaRoutes = require("./routers/categoria.routes");
const FacturaRoutes = require("./routers/factura.routes");
const LocalRoutes = require("./routers/local.routes");
const ProfileRoutes = require("./routers/profile.routes");
const TarifaRoutes = require("./routers/tarifa.routes");
const TipoVehiculoRoutes = require("./routers/tipoVehiculo.routes");
const UserRoutes = require("./routers/user.routes");
const VehiculoRoutes = require("./routers/vehiculo.routes");

//controllers
const { UserController,AccesoController, CategoriaController, FacturaController,LocalController,ProfileController,TarifaController,TipoVehiculoController,VehiculoController} = require("./controllers");

//services
const { UserService, AccesoService, CategoriaService, FacturaService, LocalService,ProfileService,TarifaService,TipoVehiculoService, VehiculoService } = require("../services");

//business
const { UserBusiness, AccesoBusiness, CategoriaBusiness, FacturaBusiness, LocalBusiness, ProfileBusiness, TarifaBusiness, TipoVehiculoBusiness, VehiculoBusiness } = require("../domain/");

//repositories
const { UserRepository, AccesoRepository, CategoriaRepository, FacturaRepository, LocalRepository, ProfileRepository, TarifaRepository, TipoVehiculoRepository, VehiculoRepository } = require("../dal/repositories");

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
    AccesoService: asClass(AccesoService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
    FacturaService: asClass(FacturaService).singleton(),
    LocalService: asClass(LocalService).singleton(),
    ProfileService: asClass(ProfileService).singleton(),
    TarifaService: asClass(TarifaService).singleton(),
    TipoVehiculoService: asClass(TipoVehiculoService).singleton(),
    UserService: asClass(UserService).singleton(),
    VehiculoService: asClass(VehiculoService).singleton(),
  })
  .register({
    AccesoRepository: asClass(AccesoRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
    FacturaRepository: asClass(FacturaRepository).singleton(),
    LocalRepository: asClass(LocalRepository).singleton(),
    ProfileRepository: asClass(ProfileRepository).singleton(),
    TarifaRepository: asClass(TarifaRepository).singleton(),
    TipoVehiculoRepository: asClass(TipoVehiculoRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    VehiculoRepository: asClass(VehiculoRepository).singleton(),
  })
  .register({
    AccesoBusiness: asClass(AccesoBusiness).singleton(),
    CategoriaBusiness: asClass(CategoriaBusiness).singleton(),
    FacturaBusiness: asClass(FacturaBusiness).singleton(),
    LocalBusiness: asClass(LocalBusiness).singleton(),
    ProfileBusiness: asClass(ProfileBusiness).singleton(),
    TarifaBusiness: asClass(TarifaBusiness).singleton(),
    TipoVehiculoBusiness: asClass(TipoVehiculoBusiness).singleton(),
    UserBusiness: asClass(UserBusiness).singleton(),
    VehiculoBusiness: asClass(VehiculoBusiness).singleton(),
  });

module.exports = container;
