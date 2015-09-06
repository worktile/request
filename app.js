var config = require("./server/config"),
    express = require('express'),
    path = require('path'),
    logger = require('./server/core/logger')(config.logger),
    ejs = require('ejs'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressLayouts = require("express-ejs-layouts"),
    compression = require("compression"),
    app = express(),
    route = require("./server/route"),
    packageJson = require("./package.json");

//app.use(compression());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json({limit: "10mb"}));
//app.use(bodyParser.raw());
//app.use(bodyParser.text());
//app.use(cookieParser());

// view engine setup
app.use(express.static(path.join(__dirname, '/www/static')));
app.set('views', path.join(__dirname, '/www/view'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.set('layout', 'layout');
app.use(expressLayouts);

app.disable("x-powered-by");
//启用反向代理
app.enable('trust proxy');

config.version = packageJson.version;
config.name = packageJson.name;
app.locals.config = config;
route(app, config, logger);
if (config.env !== "test") {
    app.set('port', process.env.PORT || 8800);
    app.listen(app.get('port'), '0.0.0.0', function () {
        logger.info('lesschat-request server listening on port %s', app.get('port'));
    });
}
if (config.env === 'production') {
    process.on("uncaughtException", function (err) {
        setTimeout(function () {
            process.exit();
        }, 1000);
        logger.error(err, "process uncaughtException");
    });
} else {
    app.set('json spaces', 2);
}

module.exports = exports = app;