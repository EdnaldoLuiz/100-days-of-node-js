module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'root',
            database: 'day090_db'
        },
        migrations: {
            directory: './migrations'
        }
    }
};