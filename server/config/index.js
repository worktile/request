var _ = require("lodash");

var config = {
    title: "纷云 Request"
};

(function () {
    var env = process.env.NODE_ENV;
    switch ((env && env.toLowerCase) || "") {
        case 'dev':
        case '':
        case 'development':
            config.env = 'development';
            break;

        case 'prod':
        case 'production':
            config.env = 'production';
            break;

        case 'test':
            config.env = 'test';
            env = 'test';
            break;
        default:
            throw new Error("The env (" + env + ") config does not exist.");
    }
    config = _.merge(config, require("./" + config.env))
})();

module.exports = exports = config;