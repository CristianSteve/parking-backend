const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");

//Routers
const Routes = require("./routers");

//controllers
const { HistoryController} = require("./controllers");

//services
const { HistoryService} = require("../services");

//business
const { HistoryBusiness} = require("../domain/")

//repositories
const { HistoryRepository} = require("../dal/repositories");

//db
const db = require("../dal/models");

const container = createContainer();

container.
    register({
        app: asClass(Startup).singleton(),
        router : asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        HistoryRoutes : asFunction(HistoryRoutes).singleton(),
        HistoryController : asClass(HistoryController).singleton(),
        
    })
    .register({
        config : asValue(config),
    })
    .register({
        db : asValue(db),
    })
    .register({
        HistoryService: asClass(HistoryService).singleton(),
      })
      .register({
        HistoryRepository: asClass(HistoryRepository).singleton(),
      })
      .register({
        HistoryBusiness: asClass(HistoryBusiness).singleton(),
      });

module.exports = container;