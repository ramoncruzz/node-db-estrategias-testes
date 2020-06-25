const ICrud = require('./../strategies/interfaces/interfaceCrud');

class MongoDB extends ICrud{

    constructor(){
        super();
    }
    create(item){
        console.log('item salvo em mongodb');
    }
}

module.exports = MongoDB;