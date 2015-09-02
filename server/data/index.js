var Sequelize = require("sequelize"),
    request = require("./request"),
    inspect = require("./inspect");

//User.sync({force: true}).then(function () {
//    // Table created
//    User.create({
//        firstName: 'John1111',
//        lastName: 'Hancock1111'
//    });
//
//
//});

//var users = User.findAll({}).then(function (result) {
//    var users = [];
//    result.forEach(function (item) {
//        users.push({id: item.id, firstName: item.firstName, lastName: item.lastName})
//    });
//    console.log(users);
//});

module.exports = exports = function (config) {
    var sequelize = new Sequelize(config.name, config.database.username, config.database.password, {
        host   : config.database.host,
        dialect: config.database.dialect,
        pool   : config.database.pool,
        // SQLite only
        storage: config.database.storage
    });
    var Request = new request(sequelize), Inspect = new inspect(sequelize);
    Request.sync().then(function () {
    });
    Inspect.sync().then(function () {
    });
    return {
        request : Request,
        inspect: Inspect
    }

};


