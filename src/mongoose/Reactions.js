const Reaction = require('./connection.js').model('reaction', {
    userId: { type: String, required: true},
    reaction: { type: String, required: true},
    url: { type: String, required: true},
    date: { type: Number, required: true},
    _sentiments: [{
        type: { type: String, required: true},
        value: { type: Number, required: true}
    }]
});

module.exports = Post;