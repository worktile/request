var config = {
    database: {
        username: '',
        password: '',
        host: 'localhost',
        dialect: 'sqlite', //'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        // SQLite only
        storage: 'path/to/database.sqlite'
    }
};

module.exports = exports = config;