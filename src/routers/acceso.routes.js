const Router = require("express");

module.exports = function({ AccesoController }){
    const router = Router();

    router.get("/",  AccesoController.getAll.bind(AccesoController));
    router.get("/:id", AccesoController.getAcceso.bind(AccesoController));
    router.patch("/:id", AccesoController.updateAcceso.bind(AccesoController));
    router.post("/", AccesoController.createAcceso.bind(AccesoController));
    
    return router;
}