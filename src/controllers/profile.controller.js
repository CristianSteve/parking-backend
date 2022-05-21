const mapper = require("automapper-js");
const { ProfileDto } = require("../dtos");

class ProfileController {
  constructor({ ProfileService }) {
    this._profileService = ProfileService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let profile = await this._profileService.getAll();
    profile = await this._mapper(ProfileDto, profile);
    return res.json({data : profile})
  }

  async getProfile(req, res){
    const { id } = req.params;
    let profile = await this._profileService.get(id);
    profile = mapper(ProfileDto, profile);
    return res.json({data : profile})
  }

  async updateProfile(req, res){
    const { id } = req.params;
    const body = req.body;
    let profile = await this._profileService.update(id, body);
    profile = mapper(ProfileId, profile);
    return res.json({data : profile})
  }

  async createProfile(req, res){
    const newProfile = req.body; 
    const { nombre, idAcceso } = newProfile;
    const error = "Parametros obligatorios no informados"
    if(!nombre || !idAcceso){
      res.status(400).json({message : `nombre o acceso del profile no informado`,error})
    }else{
      try{
        const dtoProfile = await this._mapper(ProfileDto, newProfile);
        let profile = await this._profileService.create(dtoProfile);
        profile = await this._mapper(ProfileDto, profile);
        res.status(200).json({message: "Profile creado", data : profile})
      }catch(e){
        res.status(409).json({code: "PK600", message : "Se ha produccido un error tecnico", sqlError : e?.parent?.sqlMessage})
      }
    }
  }
} 

module.exports = ProfileController;
