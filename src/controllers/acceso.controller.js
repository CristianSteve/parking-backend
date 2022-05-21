const mapper = require("automapper-js");
const { AccesoDto } = require("../dtos");

class AccesoController {
  constructor({ AccesoService }) {
    this._accesoService = AccesoService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let acceso = await this._accesoService.getAll();
    acceso = await this._mapper(AccesoDto, acceso);
    return res.json({data : acceso})
  }

  async getAcceso(req, res){
    const { id } = req.params;
    let acceso = await this._accesoService.get(id);
    acceso = mapper(AccesoDto, acceso);
    return res.json({data : acceso})
  }

  async updateAcceso(req, res){
    const { id } = req.params;
    const body = req.body;
    let acceso = await this._accesoService.update(id, body);
    acceso = mapper(AccesoId, acceso);
    return res.json({data : acceso})
  }

  async createAcceso(req, res){
    const newAcceso = req.body; 
    const { tipo } = newAcceso;
    const error = "Parametros obligatorios no informados"
    if(!tipo){
      res.status(400).json({message : `tipo de acceso no informado`,error})
    }else{
      try{
        const dtoAcceso = await this._mapper(AccesoDto, newAcceso);
        let acceso = await this._accesoService.create(dtoAcceso);
        acceso = await this._mapper(AccesoDto, acceso);
        res.status(200).json({message: "Acceso creado", data : acceso})
      }catch{
        res.status(409).json({code: "PK800", message : "Se ha produccido un error tecnico"})
      }
    }
  }
} 

module.exports = AccesoController;
