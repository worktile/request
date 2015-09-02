var Sequelize = require("sequelize");

module.exports = exports = function (sequelize) {
    return sequelize.define('request', {
        id       : {
            type: Sequelize.STRING, primaryKey: true
        },
        color    : {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.INTEGER
        },
        sid      : {
            type: Sequelize.STRING
        },
        count    : {
            type        : Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};