var winston = require("winston");

var logger = new (winston.Logger)({}), errorLogger = new (winston.Logger)({});
var logInfo = false, logError = false;

var initSettings = function(config){
    var live = (process.argv.length >= 3 && process.argv[2].toLowerCase() == "live");

    if (config.filename && !live) {
        logger.add(winston.transports.File, {
            level   : config.level,
            filename: config.filename,
            dirname : config.dirname,
            maxsize : config.maxsize
        });
        logInfo = true;
    }

    if (logger.errorFileName && !live) {
        errorLogger.add(winston.transports.File, {
            level   : config.level,
            filename: config.errorFileName,
            dirname : config.dirname,
            maxsize : config.maxsize
        });
        logError = true;
    }

    if (!logInfo) {
        logger.add(winston.transports.Console, {level: logger.level});
    }
    if (!logError) {
        errorLogger.add(winston.transports.Console, {level: logger.level});
    }
};

module.exports = exports = function(config){
    initSettings(config);
    return {
        log  : function () {
            logger.log.apply(logger, arguments);
        },
        info : function () {
            logger.info.apply(logger, arguments);
        },
        debug: function () {
            logger.debug.apply(logger, arguments);
        },
        warn : function () {
            errorLogger.warn.apply(logger, arguments);
        },
        error: function (err) {
            errorLogger.error.apply(logger, arguments);
        }
    };
};