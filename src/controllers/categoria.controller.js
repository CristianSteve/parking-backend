const mapper = require("automapper-js");
const { CategoriaDto } = require("../dtos");

class CategoriaController {
  constructor({ CategoriaService }) {
    this._categoriaService = CategoriaService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let categoria = await this._categoriaService.getAll();
    categoria = await this._mapper(CategoriaDto, categoria);
    return res.json({data : categoria})
  }

  async getCategoria(req, res){
    const { id } = req.params;
    let categoria = await this._categoriaService.get(id);
    categoria = mapper(CategoriaDto, categoria);
    return res.json({data : categoria})
  }

  async updateCategoria(req, res){
    const { id } = req.params;
    const body = req.body;
    let categoria = await this._categoriaService.update(id, body);
    categoria = mapper(CategoriaId, categoria);
    return res.json({data : categoria})
  }

  async createCategoria(req, res){
    const newCategoria = req.body; 
    const { tipo } = newCategoria;
    const error = "Parametros obligatorios no informados"
    if(!tipo){
      res.status(400).json({message : `tipo de categoria no informado`,error})
    }else{
      try{
        const dtoCategoria = await this._mapper(CategoriaDto, newCategoria);
        let categoria = await this._categoriaService.create(dtoCategoria);
        categoria = await this._mapper(CategoriaDto, categoria);
        res.status(200).json({message: "Categoria creado", data : categoria})
      }catch(e){
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico", sqlError : e?.parent?.sqlMessage})
      }
    }
  }
} 

module.exports = CategoriaController;
