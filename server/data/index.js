var Sequelize = require("sequelize"),
    request = require("./request"),
    inspect = require("./inspect");

module.exports = exports = function (config) {
    var sequelize = new Sequelize(config.name, config.database.username, config.database.password, {
        host   : config.database.host,
        dialect: config.database.dialect,
        pool   : config.database.pool,
        // SQLite only
        storage: config.database.storage,
        logging: config.database.logging
    });
    var Request = new request(sequelize), Inspect = new inspect(sequelize, Request);
    Request.sync({force: false});
    Inspect.sync({force: false});
    Request.hasMany(Inspect, {foreignKey: 'requestId'});
    Inspect.belongsTo(Request, {foreignKey: 'requestId'});
    return {
        request: Request,
        inspect: Inspect
    }

};


