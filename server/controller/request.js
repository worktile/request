var Base = require("./base"),
    util = require("util"),
    lcUtil = require("../core/util");
var Request = function (config, logger, data) {
    Base.call(this, config, logger, data);

    Request.prototype.create = function (req, res, next) {
        var reqId = lcUtil.guid();
        data.request.create({
            id       : reqId,
            createdAt: lcUtil.getNow(),
            sid      : req.sid
        }).then(function (request) {
            res.redirect("/" + reqId + "/inspect");
        });
    };

    Request.prototype.response = function (req, res, next) {
        console.log(req.method);
        console.log(req.headers);
        res.send({code: 200});
    };

    Request.prototype.list = function (req, res, next) {
        var reqId = req.params.id;
        res.render("list.html", {title: reqId});
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