const ICrud = require('./../strategies/interfaces/interfaceCrud');

class Postgres extends ICrud{
    constructor(){
        super();
    }
    create(item){
        console.log('item salvo no postgres');
    }
    isConnected(){
        
    }
}

module.exports = Postgres;