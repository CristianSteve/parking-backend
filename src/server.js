const express = require("express");

class Server {

    _http = "initialize";

    constructor({config, router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    start(){
        return new Promise((resolve, rejected) => {
            this._http = this._express.listen(this._config.PORT, ()=>{
                const { port } = this._http.address();
                console.log("running on port", port);
                resolve(this._http);
            })
        }) 
    }
}

module.exports = Server;