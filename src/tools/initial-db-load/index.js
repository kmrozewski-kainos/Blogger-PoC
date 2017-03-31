let config = require('yamljs').load('config.yml');
let dbController = require('./src/DbController');

populateUsers();

function populateUsers() {
    let promises = [];

    config.users.forEach(user =>
        promises.push(new Promise((resolve, reject) => {
            console.info('[DB]: Adding user (user_id: ' + user.id + ', name: ' + user.name + ')');
            dbController.addUser(user, config.database).then(resolve, reject);
        }))
    );

    Promise.all(promises).then(() => {
        console.info("[DONE] populate table Users");
        populatePosts();
    });
};

function populatePosts() {
    let promises = [];

    config.posts.forEach(row =>
        promises.push(new Promise((resolve, reject) => {
            console.info('[DB]: Adding post (title: ' + row.post.title + ', user_id: ' + row.user_id + ')');
            dbController.addPost(row.user_id, row.post, config.database).then(resolve, reject);
        }))
    );

    Promise.all(promises).then(() => {
        console.info("[DONE] populate table Posts");
        process.exit();
    });
}