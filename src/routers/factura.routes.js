const Router = require("express");

module.exports = function({ FacturaController }){
    const router = Router();

    router.get("/",  FacturaController.getAll.bind(FacturaController));
    router.get("/:id", FacturaController.getFactura.bind(FacturaController));
    router.patch("/:id", FacturaController.updateFactura.bind(FacturaController));
    router.post("/", FacturaController.createFactura.bind(FacturaController));
    
    return router;
}