const Router = require("express");

module.exports = function({ UserController }){
    const router = Router();

    router.get("/",  UserController.getAll.bind(UserController));
    router.get("/:id", UserController.getUser.bind(UserController));
    router.patch("/:id", UserController.updateUser.bind(UserController));
    router.post("/", UserController.createUser.bind(UserController));
    
    return router;
}