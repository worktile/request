var Sequelize = require("sequelize");
module.exports = exports = function (sequelize) {
    return sequelize.define('response', {
        id       : {
            type: Sequelize.STRING
        },
        requestId: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.INTEGER
        },
        method   : {
            type: Sequelize.INTEGER
        },
        header   : {
            type: Sequelize.STRING
        },
        body     : {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};