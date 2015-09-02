var Sequelize = require("sequelize"),
    request = require("./request"),
    response = require("./response");

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
    var Request = request(sequelize), Response = response(sequelize);
    Request.sync().then(function () {
    });
    Response.sync().then(function () {
    });
    return {
        request : Request,
        response: Response
    }

};


