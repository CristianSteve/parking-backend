const mapper = require("automapper-js");
const { UserDto, UserId } = require("../dtos");

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async getAll(req, res) {
    let user = await this._userService.getAll();
    user = await this._mapper(UserDto, user);
    return res.json({ data: user });
  }

  async getUser(req, res) {
    const { id } = req.params;
    try {
      let user = await this._userService.get(id);
      user = mapper(UserId, user);
      res.status(200).json({ data: user });
    } catch {
      res.status(409).json({
        code: "PK200",
        message: "Usuario no existente",
      });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const body = req.body;
    let user = await this._userService.update(id, body);
    user = mapper(UserId, user);
    return res.json({ data: user });
  }

  async createUser(req, res) {
    const newUser = req.body;
    const {
      username,
      cedula,
      email,
      password,
      nombre,
      direccion,
      celular,
      idAcceso,
      idProfile,
    } = newUser;
    const error = "Parametros obligatorios no informados";
    let campo = "";
    if (!username) campo = "username";
    else if (!email) campo = "email";
    else if (!cedula) campo = "cedula";
    else if (!password) campo = "password";
    else if (!nombre) campo = "nombre";
    else if (!direccion) campo = "direccion";
    else if (!celular) campo = "celular";
    else if (!idAcceso) campo = "Acceso";
    else if (!idProfile) campo = "Perfil";
    if (!!campo) {
      res.status(400).json({ message: `${campo} no informado`, error });
    } else {
      try {
        const dtoUser = await this._mapper(UserDto, newUser);
        let user = await this._userService.create(dtoUser);
        user = await this._mapper(UserDto, user);
        res.status(200).json({ message: "Usuario creado", data: user });
      } catch (e) {
        res.status(409).json({
          code: "PK600",
          message: "Se ha produccido un error tecnico",
          sqlError : e?.parent?.sqlMessage
        });
      }
    }
  }
}

module.exports = UserController;
