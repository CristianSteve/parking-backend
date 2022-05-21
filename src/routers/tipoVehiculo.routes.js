const Router = require("express");

module.exports = function({ TipoVehiculoController }){
    const router = Router();

    router.get("/",  TipoVehiculoController.getAll.bind(TipoVehiculoController));
    router.get("/:id", TipoVehiculoController.getTipoVehiculo.bind(TipoVehiculoController));
    router.patch("/:id", TipoVehiculoController.updateTipoVehiculo.bind(TipoVehiculoController));
    router.post("/", TipoVehiculoController.createTipoVehiculo.bind(TipoVehiculoController));
    
    return router;
}