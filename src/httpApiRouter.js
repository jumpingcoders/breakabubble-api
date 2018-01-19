const express = require('express');
//const Post = require('./mongoose/Post.js');

const router = express.Router();

router.use('/*', function (req, res, next) {
    next();
});


router.get('/users/:hash', function (req, res, next) {
    res
        .status(200)
        .json({
            "record": "https://www.google.cz/search?tbm=isch&q=stickman+animation&spell=1&sa=X&ved=0ahUKEwjXz5nD7-TYAhURFewKHYiAATIQvwUIOygA&biw=1920&bih=974&dpr=1#imgrc=pRsC8TKrY8z3jM:",
            "id": 123456789,
            "articleScore": 23,
            "userScore": "Hello World",
            "time": "2017-01-19"
        });
});


/*router.get('/posts', function (req, res) {


    const fromDate = parseInt(req.param('fromDate') || '0');

    Post.find({date: {$gt: fromDate}}, function (err, posts) {
        res.json({
            status: 'ok',
            data: posts.map((post) => {
                const path = post.path.split('/');
                const book = path[0];
                const chapter = 'chapter-' + (parseInt(path[1]) + 1);
                const uri = `/${book}/${chapter}/#/discussion/${post._id}`;
                return Object.assign({}, post.toJSON(), {uri})
            })
        });
    });
});*/

module.exports = router;