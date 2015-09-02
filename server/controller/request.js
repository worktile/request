var Base = require("./base"),
    util = require("util"),
    lcUtil = require("../core/util"),
    _ = require("lodash"),
    moment = require("moment");
var Request = function (config, logger, data) {
    Base.call(this, config, logger, data);

    /**
     * create request
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.create = function (req, res, next) {
        var reqId = lcUtil.guid();
        data.request.create({
            id       : reqId,
            createdAt: lcUtil.getNow(),
            sid      : req.sid
        }).then(function () {
            res.redirect("/" + reqId + "/inspect");
        });
    };

    Request.prototype.response = function (req, res, next) {
        var reqId = req.params.id;
        var inspect = {
            id       : lcUtil.guid(),
            requestId: reqId,
            createdAt: lcUtil.getNow(),
            ip       : req.ip,
            path     : req.path,
            headers  : req.headers ? JSON.stringify(req.headers) : null,
            params   : req.params ? JSON.stringify(req.params) : null,
            query    : req.query ? JSON.stringify(req.query) : null,
            body     : req.body ? JSON.stringify(req.body) : null
        };
        var METHODS = {
            GET   : 1,
            POST  : 2,
            PUT   : 3,
            DELETE: 4
        };
        inspect.method = METHODS[req.method];
        data.inspect.create(inspect).then(function () {
            res.send("ok");
        });
    };

    /**
     * /api/requests/:id/inspects
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.getInspectList = function (req, res, next) {
        var reqId = req.params.id;
        data.inspect.findAll({
            where: {
                requestId: reqId
            }
        }).then(function (inspects) {
            var _inspects = _.map(inspects, function (inspecte) {
                return {
                    method   : inspecte.method,
                    ip       : inspecte.ip,
                    query    : inspecte.query ? JSON.parse(inspecte.query) : null,
                    params   : inspecte.params ? JSON.parse(inspecte.params) : null,
                    headers  : inspecte.headers ? JSON.parse(inspecte.headers) : null,
                    body     : inspecte.body ? JSON.parse(inspecte.body) : null,
                    createdAt: moment(inspecte.createdAt).format("YYYY年MM月DD日 HH:mm:ss"),
                    path     : inspecte.path
                };
            });
            res.send({code: 200, data: _inspects})
        })
    };

    /**
     * GET /:id/inspect
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.list = function (req, res, next) {
        var reqId = req.params.id;
        res.render("list.html", {title: reqId, reqId: reqId});

    };

    Request.prototype.index = function (req, res, next) {
        res.render("index", {title: "首页"})
    };

    Request.prototype.notFound = function (req, res, next) {
        res.render("shared/404.html", {title: "首页"})
    }
};

util.inherits(Request, Base);
module.exports = exports = Request;