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
        populateComments();
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
    });
}

function populateComments() {
    let promises = [];

    config.comments.forEach(row =>
        promises.push(new Promise((resolve, reject) => {
            console.info('[DB]: Adding comment (comment_id: ' + row.comment.id + ', post_id: ' + row.comment.post_id + ', user_id: ' + row.user_id + ')');
            dbController.addComment(row.user_id, row.post_id, comment, config.database);
        }))
    );

    Promise.all(promises).then(() => {
        console.info('[DONE]: populate table Comments');
        process.exit();
    });
}