const mapper = require("automapper-js");
const { LocalDto } = require("../dtos");

class LocalController {
  constructor({ LocalService }) {
    this._localService = LocalService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let local = await this._localService.getAll();
    local = await this._mapper(LocalDto, local);
    return res.json({data : local})
  }

  async getLocal(req, res){
    const { id } = req.params;
    let local = await this._localService.get(id);
    local = mapper(LocalDto, local);
    return res.json({data : local})
  }

  async updateLocal(req, res){
    const { id } = req.params;
    const body = req.body;
    let local = await this._localService.update(id, body);
    local = mapper(LocalId, local);
    return res.json({data : local})
  }

  async createLocal(req, res){
    const newLocal = req.body; 
    const { nombre, direccion } = newLocal;
    const error = "Parametros obligatorios no informados"
    if(!nombre || !direccion){
      res.status(400).json({message : `nombre o direccion de local no informado`,error})
    }else{
      try{
        const dtoLocal = await this._mapper(LocalDto, newLocal);
        let local = await this._localService.create(dtoLocal);
        local = await this._mapper(LocalDto, local);
        res.status(200).json({message: "Local creado", data : local})
      }catch(e){
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico",sqlError : e?.parent?.sqlMessage})
      }
    }
  }
} 

module.exports = LocalController;
