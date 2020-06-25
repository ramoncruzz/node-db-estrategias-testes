const Sequelize  = require('sequelize');
const driver = new Sequelize('heroes','ramoncruz','ramoncruz',{ host: 'localhost', dialect: 'postgres', quoteIdentifiers: false, operatorsAliases: false});

async function main(){
    const Herois = driver.define('herois',{
        id:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            require: true,
        },
        poder:{
            type: Sequelize.STRING,
            require: true,
        }
    },{
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    });
    await Herois.sync();
    await Herois.create({
        nome: 'Son Gohan',
        poder: 'Pesquisa e pancadaria'
    });
    const result = await Herois.findAll({raw: true});

    console.log('resultado ', result);
}

main();