const mapper = require("automapper-js");
const { FacturaDto } = require("../dtos");

class FacturaController {
  constructor({ FacturaService }) {
    this._facturaService = FacturaService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let factura = await this._facturaService.getAll();
    factura = await this._mapper(FacturaDto, factura);
    return res.json({data : factura})
  }

  async getFactura(req, res){
    const { id } = req.params;
    let factura = await this._facturaService.get(id);
    factura = mapper(FacturaDto, factura);
    return res.json({data : factura})
  }

  async updateFactura(req, res){
    const { id } = req.params;
    const body = req.body;
    let factura = await this._facturaService.update(id, body);
    factura = mapper(FacturaId, factura);
    return res.json({data : factura})
  }

  async createFactura(req, res){
    const newFactura = req.body; 
    const { tipo } = newFactura;
    const error = "Parametros obligatorios no informados"
    if(!tipo){
      res.status(400).json({message : `tipo de factura no informado`,error})
    }else{
      try{
        const dtoFactura = await this._mapper(FacturaDto, newFactura);
        let factura = await this._facturaService.create(dtoFactura);
        factura = await this._mapper(FacturaDto, factura);
        res.status(200).json({message: "Factura creado", data : factura})
      }catch{
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico"})
      }
    }
  }
} 

module.exports = FacturaController;
