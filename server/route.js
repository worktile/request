/*global module,require*/
var ctrl = require("./controller"),
    util = require("util"),
    handler = require("./handler"),
    express = require("express"),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compression = require("compression");

exports = module.exports = function (app, config, logger) {
    handler = new handler(config, logger);
    ctrl = ctrl(config, logger);

    app.use(handler.domainMiddleware);
    app.use(compression());
    app.use(cookieParser());

    app.use("/api/*", bodyParser.json({limit: "10mb"}), handler.initCookie(true));
    app.get("/api/requests/:id/inspects", ctrl.request.checkRequest, ctrl.request.getInspectList);
    app.get("/api/requests", ctrl.request.getRequestList);
    app.get("", handler.initCookie(false), ctrl.request.index);
    app.get("/:id/inspect", handler.initCookie(false), ctrl.request.checkRequest, ctrl.request.list);
    app.get("/create", handler.initCookie(false), ctrl.request.create);
    app.all("/:id", handler.anyBodyParser, ctrl.request.checkRequest, ctrl.request.response);

    app.all('*', ctrl.request.notFound);
    // Error handler
    app.use(handler.errorHandler);
};