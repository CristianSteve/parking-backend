const Router = require("express");

module.exports = function({ LocalController }){
    const router = Router();

    router.get("/",  LocalController.getAll.bind(LocalController));
    router.get("/:id", LocalController.getLocal.bind(LocalController));
    router.patch("/:id", LocalController.updateLocal.bind(LocalController));
    router.post("/", LocalController.createLocal.bind(LocalController));
    
    return router;
}