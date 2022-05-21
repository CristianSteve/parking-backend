const Router = require("express");

module.exports = function({ CategoriaController }){
    const router = Router();

    router.get("/",  CategoriaController.getAll.bind(CategoriaController));
    router.get("/:id", CategoriaController.getCategoria.bind(CategoriaController));
    router.patch("/:id", CategoriaController.updateCategoria.bind(CategoriaController));
    router.post("/", CategoriaController.createCategoria.bind(CategoriaController));
    
    return router;
}