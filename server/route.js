/*global module,require*/
var ctrl = require("./controller"),
    util = require("util"),
    handler = require("./handler");

exports = module.exports = function (app, config, logger) {
    handler = handler(config, logger);
    ctrl = ctrl(config, logger);
    app.use(handler.domainMiddleware);

    app.get("/api/requests/:id/inspects", ctrl.request.checkRequest, ctrl.request.getInspectList);
    app.get("/api/requests", ctrl.request.getRequestList);
    app.get("", handler.init, ctrl.request.index);
    app.get("/:id/inspect", handler.init, ctrl.request.checkRequest, ctrl.request.list);
    app.get("/create", handler.init, ctrl.request.create);
    app.all("/:id", ctrl.request.checkRequest, ctrl.request.response);

    app.all('*', ctrl.request.notFound);

    // Error handler
    app.use(handler.errorHandler);
};