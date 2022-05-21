const mapper = require("automapper-js");
const { UserDto, UserId } = require("../dtos");

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let user = await this._userService.getAll();
    user = await this._mapper(UserDto, user);
    return res.json({data : user})
  }

  async getUser(req, res){
    const { id } = req.params;
    let user = await this._userService.get(id);
    user = mapper(UserId, user);
    return res.json({data : user})
  }

  async updateUser(req, res){
    const { id } = req.params;
    const body = req.body;
    let user = await this._userService.update(id, body);
    user = mapper(UserId, user);
    return res.json({data : user})
  }

  async createUser(req, res){
    let newUser = req.body; 
    const dtoUser = await this._mapper(UserDto, newUser);
    let user = await this._userService.create(dtoUser);
    user = await this._mapper(UserDto, user);
    res.json({data : user})
  }
} 

module.exports = UserController;
