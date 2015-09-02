var domain = require("domain"),
    _ = require("lodash"),
    lcUtil = require("./core/util");

module.exports = exports = function (config, logger) {

    function init(req, res, next) {
        if (!req.cookies["sid"]) {
            var sid = lcUtil.guid();
            res.cookie("sid", sid, {
                expires : 0,
                httpOnly: false,
                path    : '/'
            });
            req.sid = sid;
        }else{
            req.sid = req.cookies["sid"];
        }
        next();
    };

    function domainMiddleware(req, res, next) {
        var d = domain.create();
        d.add(req);
        d.add(res);
        d.on('error', function (err) {
            next(err);
        });
        d.run(next);
    };

    function errorHandler(error, req, res, next) {
        if (error && 'number' !== typeof error) {
            if (error.code && !error.error) {
                logger.warn(error, {oid: req.context ? req.context.oid : ""});
            } else {
                logger.error(error, {oid: req.context ? req.context.oid : "", stack: error.stack || ""});
            }
        }
        if (req.url.indexOf("/api") >= 0) {
            if (error && error.code) {
                return res.send({code: error.code});
            } else if ('number' === typeof error) {
                logger.warn("response code is " + error, {oid: req.context ? req.context.oid : ""});
                return res.send({code: error});
            } else {
                return res.send({code: 500});
            }
        } else {
            return res.render('shared/error.html', {title: '服务器正在着急中'});
        }
    };

    return {
        domainMiddleware: domainMiddleware,
        errorHandler    : errorHandler,
        init            : init
    };
};