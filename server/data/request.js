var Sequelize = require("sequelize");

module.exports = exports = function (sequelize) {
    return sequelize.define('request', {
        id       : {
            type: Sequelize.STRING, primaryKey: true
        },
        createdAt: {
            type: Sequelize.INTEGER
        },
        sid      : {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};