const Router = require("express");

module.exports = function({ VehiculoController }){
    const router = Router();

    router.get("/",  VehiculoController.getAll.bind(VehiculoController));
    router.get("/:id", VehiculoController.getVehiculo.bind(VehiculoController));
    router.patch("/:id", VehiculoController.updateVehiculo.bind(VehiculoController));
    router.post("/", VehiculoController.createVehiculo.bind(VehiculoController));
    
    return router;
}