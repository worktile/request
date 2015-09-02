var Request = require("./request");

module.exports = exports = function (config, logger) {
    var data = require("../data")(config);
    var request = new Request(config, logger, data);

    return {
        request: request
    }
};