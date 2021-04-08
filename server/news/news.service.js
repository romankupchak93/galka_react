const db2 = require('../_helpers/db2');

module.exports = {
    getNews,
    getPostId
};


async function getNews() {
    return await db2.News.findAll();
}

async function getPostId(id) {
    return await getPost(id);
}
async function getPost(id) {
    const post = await db2.News.findByPk(id);
    if (!post) throw 'User not found';
    return post;
}
// helper functions

// async function getUser(id) {
//     const user = await db.User.findByPk(id);
//     if (!user) throw 'User not found';
//     return user;
// }
