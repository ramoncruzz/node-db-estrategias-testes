const ContextStrategy = require('./src/db/strategies/base/contextStrategy');
const MongoDB = require('./src/db/strategies/mogodb');
const Postgres = require('./src/db/strategies/posgres');

const contextMongo = new ContextStrategy(new MongoDB());
const contextPostgres = new ContextStrategy(new Postgres());


contextMongo.delete(0);
contextPostgres.create();