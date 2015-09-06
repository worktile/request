var config = {
    enableCompression: true,
    database: {
        username: '',
        password: '',
        host    : 'localhost',
        dialect : 'sqlite', //'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
        pool    : {
            max : 5,
            min : 0,
            idle: 10000
        },
        // SQLite only
        storage : 'data/database.sqlite',
        logging : false
    },
    logger  : {
        level        : "info",
        dirName      : "/data/logs/nodejs", // e.g. /mnt/wtlog/nodejs/web
        filename     : "lc-request-log.log",
        errorFileName: "lc-request-error.log",
        maxsize      : 1024 * 1024 * 10,
    }
};

module.exports = exports = config;