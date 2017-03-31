let pg = require('pg');

let DbController = {
    connection: null,
    addUserSql: "INSERT INTO users(id, name, display_name, registered, type) VALUES($1, $2, $3, $4, $5)",
    addPostSql: "INSERT INTO posts(title, timestamp, content, user_id) VALUES($1, $2, $3, $4)",
    client: (config) => {
        if (DbController.connection === null) {
            DbController.connection = new pg.Pool(config);
            DbController.connection.connect();
        }

        return DbController.connection;
    },
    addUser: (user, config) => new Promise((resolve, reject) =>
        DbController
        .client(config)
        .query(
            DbController.addUserSql, [user.id, user.name, user.display_name, user.registered, user.type],
            (error, result) => error ? handleError(error, reject) : handleSuccess(result, resolve)
        )
    ),
    addPost: (userId, post, config) => new Promise((resolve, reject) =>
        DbController
        .client(config)
        .query(
            DbController.addPostSql, [post.title, post.timestamp, post.content, userId],
            (error, result) => error ? handleError(error, reject) : handleSuccess(result, resolve)
        )
    )
};

handleSuccess = (result, resolve) => {
    console.info('[OK DB]: ' + result.command + ' ' + result.rowCount + ' rows');
    resolve();
};

handleError = (error, reject) => {
    console.error('[ERROR DB]: ' + error.message);
    reject();
};

module.exports = DbController;