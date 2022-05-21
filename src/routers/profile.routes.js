const Router = require("express");

module.exports = function({ ProfileController }){
    const router = Router();

    router.get("/",  ProfileController.getAll.bind(ProfileController));
    router.get("/:id", ProfileController.getProfile.bind(ProfileController));
    router.patch("/:id", ProfileController.updateProfile.bind(ProfileController));
    router.post("/", ProfileController.createProfile.bind(ProfileController));
    
    return router;
}