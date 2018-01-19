const Post = require('./connection.js').model('post', {
    path: { type: String, required: true},
    date: { type: Number, required: true},
    userId: { type: String, required: true},
    text: { type: String, required: true}
});

module.exports = Post;