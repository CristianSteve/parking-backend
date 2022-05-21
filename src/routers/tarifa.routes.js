const Router = require("express");

module.exports = function({ TarifaController }){
    const router = Router();

    router.get("/",  TarifaController.getAll.bind(TarifaController));
    router.get("/:id", TarifaController.getTarifa.bind(TarifaController));
    router.patch("/:id", TarifaController.updateTarifa.bind(TarifaController));
    router.post("/", TarifaController.createTarifa.bind(TarifaController));
    
    return router;
}