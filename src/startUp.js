class StartUp {
    constructor({server}){
        this._server = server;
    }

    async start(){
        return await this._server.start();
    }
}

module.exports = StartUp;