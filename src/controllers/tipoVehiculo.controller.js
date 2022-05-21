const mapper = require("automapper-js");
const { TipoVehiculoDto } = require("../dtos");

class TipoVehiculoController {
  constructor({ TipoVehiculoService }) {
    this._tipoVehiculoService = TipoVehiculoService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let tipoVehiculo = await this._tipoVehiculoService.getAll();
    tipoVehiculo = await this._mapper(TipoVehiculoDto, tipoVehiculo);
    return res.json({data : tipoVehiculo})
  }

  async getTipoVehiculo(req, res){
    const { id } = req.params;
    let tipoVehiculo = await this._tipoVehiculoService.get(id);
    tipoVehiculo = mapper(TipoVehiculoDto, tipoVehiculo);
    return res.json({data : tipoVehiculo})
  }

  async updateTipoVehiculo(req, res){
    const { id } = req.params;
    const body = req.body;
    let tipoVehiculo = await this._tipoVehiculoService.update(id, body);
    tipoVehiculo = mapper(TipoVehiculoId, tipoVehiculo);
    return res.json({data : tipoVehiculo})
  }

  async createTipoVehiculo(req, res){
    const newTipoVehiculo = req.body; 
    const { marca, modelo, puertas } = newTipoVehiculo;
    const error = "Parametros obligatorios no informados";
    let campo = "";
    if (!marca) campo = "marca";
    else if (!modelo) campo = "modelo";
    else if (!puertas && puertas !== 0) campo = "puertas";
    if (!!campo) {
      res.status(400).json({message : `${campo} del vehiculo no informado`,error})
    }else{
      try{
        const dtoTipoVehiculo = await this._mapper(TipoVehiculoDto, newTipoVehiculo);
        let tipoVehiculo = await this._tipoVehiculoService.create(dtoTipoVehiculo);
        tipoVehiculo = await this._mapper(TipoVehiculoDto, tipoVehiculo);
        res.status(200).json({message: "TipoVehiculo creado", data : tipoVehiculo})
      }catch(e){
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico",sqlError : e?.parent?.sqlMessage})
      }
    }
  }
} 

module.exports = TipoVehiculoController;
