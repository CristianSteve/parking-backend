const mapper = require("automapper-js");
const { VehiculoDto } = require("../dtos");

class VehiculoController {
  constructor({ VehiculoService }) {
    this._vehiculoService = VehiculoService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let vehiculo = await this._vehiculoService.getAll();
    vehiculo = await this._mapper(VehiculoDto, vehiculo);
    return res.json({data : vehiculo})
  }

  async getVehiculo(req, res){
    const { id } = req.params;
    let vehiculo = await this._vehiculoService.get(id);
    vehiculo = mapper(VehiculoDto, vehiculo);
    return res.json({data : vehiculo})
  }

  async updateVehiculo(req, res){
    const { id } = req.params;
    const body = req.body;
    let vehiculo = await this._vehiculoService.update(id, body);
    vehiculo = mapper(VehiculoId, vehiculo);
    return res.json({data : vehiculo})
  }

  async createVehiculo(req, res){
    const newVehiculo = req.body; 
    const { tipo } = newVehiculo;
    const error = "Parametros obligatorios no informados"
    if(!tipo){
      res.status(400).json({message : `tipo de vehiculo no informado`,error})
    }else{
      try{
        const dtoVehiculo = await this._mapper(VehiculoDto, newVehiculo);
        let vehiculo = await this._vehiculoService.create(dtoVehiculo);
        vehiculo = await this._mapper(VehiculoDto, vehiculo);
        res.status(200).json({message: "Vehiculo creado", data : vehiculo})
      }catch{
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico"})
      }
    }
  }
} 

module.exports = VehiculoController;
