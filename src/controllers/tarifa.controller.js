const mapper = require("automapper-js");
const { TaridaDto } = require("../dtos");

class TarifaController {
  constructor({ TarifaService }) {
    this._tarifaService = TarifaService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let tarifa = await this._tarifaService.getAll();
    tarifa = await this._mapper(TaridaDto, tarifa);
    return res.json({data : tarifa})
  }

  async getTarifa(req, res){
    const { id } = req.params;
    let tarifa = await this._tarifaService.get(id);
    tarifa = mapper(TaridaDto, tarifa);
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
    const { tipoAutomotor, valorMinuto, valorDia, valorMes, idLocal } = newTarifa;
    const error = "Parametros obligatorios no informados"
    let campo = "";
    if (!tipoAutomotor) campo = "tipoAutomotor";
    else if (!valorMinuto) campo = "valorMinuto";
    else if (!valorDia) campo = "ValorDia";
    else if (!valorMes) campo = "ValorMes";
    else if (!idLocal) campo = "idLocal";
    if(!!campo){
      res.status(400).json({message : `${campo} de tarifa no informado`,error})
    }else{
      try{
        const dtoTarifa = await this._mapper(TaridaDto, newTarifa);
        let tarifa = await this._tarifaService.create(dtoTarifa);
        tarifa = await this._mapper(TaridaDto, tarifa);
        res.status(200).json({message: "Tarifa creado", data : tarifa})
      }catch(e){
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico", sqlError : e?.parent?.sqlMessage})
      }
    }
  }
} 

module.exports = TarifaController;
