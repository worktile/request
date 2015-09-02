var Sequelize = require("sequelize");
module.exports = exports = function (sequelize, Request) {
    return sequelize.define('inspect', {
        id       : {
            type: Sequelize.STRING, primaryKey: true
        },
        requestId: {
            type      : Sequelize.STRING,
            //references: {
            //    // This is a reference to another model
            //    model: Request,
            //    // This is the column name of the referenced model
            //    key  : 'id'
            //}
        },
        path     : {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.INTEGER
        },
        method   : {
            type: Sequelize.INTEGER
        },
        headers  : {
            type: Sequelize.STRING
        },
        params   : {
            type: Sequelize.STRING
        },
        query    : {
            type: Sequelize.STRING
        },
        body     : {
            type: Sequelize.STRING
        },
        ip       : {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};