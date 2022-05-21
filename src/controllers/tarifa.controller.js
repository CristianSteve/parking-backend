const mapper = require("automapper-js");
const { TarifaDto } = require("../dtos");

class TarifaController {
  constructor({ TarifaService }) {
    this._tarifaService = TarifaService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let tarifa = await this._tarifaService.getAll();
    tarifa = await this._mapper(TarifaDto, tarifa);
    return res.json({data : tarifa})
  }

  async getTarifa(req, res){
    const { id } = req.params;
    let tarifa = await this._tarifaService.get(id);
    tarifa = mapper(TarifaDto, tarifa);
    return res.json({data : tarifa})
  }

  async updateTarifa(req, res){
    const { id } = req.params;
    const body = req.body;
    let tarifa = await this._tarifaService.update(id, body);
    tarifa = mapper(TarifaId, tarifa);
    return res.json({data : tarifa})
  }

  async createTarifa(req, res){
    const newTarifa = req.body; 
    const { tipo } = newTarifa;
    const error = "Parametros obligatorios no informados"
    if(!tipo){
      res.status(400).json({message : `tipo de tarifa no informado`,error})
    }else{
      try{
        const dtoTarifa = await this._mapper(TarifaDto, newTarifa);
        let tarifa = await this._tarifaService.create(dtoTarifa);
        tarifa = await this._mapper(TarifaDto, tarifa);
        res.status(200).json({message: "Tarifa creado", data : tarifa})
      }catch{
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico"})
      }
    }
  }
} 

module.exports = TarifaController;
