var Base = require("./base"),
    util = require("util"),
    constant = require("../core/constant"),
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
        var reqId = lcUtil.shortId();
        var index = Math.floor(Math.random() * constant.color.length);
        data.request.create({
            id       : reqId,
            createdAt: lcUtil.getNow(),
            sid      : req.sid,
            color    : constant.color[index]
        }).then(function () {
            res.redirect("/" + reqId + "/inspect");
        });
    };

    /**
     * 接受响应
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.response = function (req, res, next) {
        var reqId = req.params.id;
        var inspect = {
            id       : lcUtil.guid(),
            requestId: reqId,
            createdAt: lcUtil.getNow(),
            ip       : req.ip,
            path     : req.path,
            headers  : req.headers ? JSON.stringify(req.headers) : null,
            query    : req.query ? JSON.stringify(req.query) : null,
            body     : req.body ? JSON.stringify(req.body) : null
        };
        if (req.is("application/x-www-form-urlencoded")) {
            inspect.params = inspect.query;
        }
        inspect.method = constant.methods[req.method];
        data.inspect.create(inspect).then(function () {
            res.send("ok");
        }, function (err) {

        });
    };

    /**
     * GET /api/requests
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.getRequestList = function (req, res, next) {
        data.request.findAll({
            where: {
                sid: req.sid
            },
            order: [['createdAt', 'DESC']]
        }).then(function (requests) {
            var _requests = _.map(requests, function (request) {
                return {
                    id   : request.id,
                    color: request.color
                };
            });
            res.send({code: 200, data: _requests})
        })
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
            },
            order: [['createdAt', 'DESC']]
        }).then(function (inspects) {
            var _inspects = _.map(inspects, function (inspecte) {
                return {
                    method   : inspecte.method,
                    ip       : inspecte.ip,
                    query    : inspecte.query ? JSON.parse(inspecte.query) : null,
                    params   : inspecte.params ? lcUtil.objectToArray(JSON.parse(inspecte.params)) : null,
                    headers  : inspecte.headers ? lcUtil.objectToArray(JSON.parse(inspecte.headers)) : null,
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

    /**
     * GET /
     * @param req
     * @param res
     * @param next
     */
    Request.prototype.index = function (req, res, next) {
        res.render("index", {title: "首页"})
    };

    Request.prototype.notFound = function (req, res, next) {
        res.render("shared/404.html", {title: "首页"})
    }
};

util.inherits(Request, Base);
module.exports = exports = Request;