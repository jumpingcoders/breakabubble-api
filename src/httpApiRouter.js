const express = require('express');
//const Post = require('./mongoose/Reactions.js');

const router = express.Router();

router.use('/*', function (req, res, next) {
    next();
});


router.get('/users/:hash', function (req, res, next) {
    res
        .status(200)
        .json({
            userId: 'putinlover',
            reactions: [
                {
                    type: 'RUSSIA',
                    value: 10
                },
                {
                    type: 'EU',
                    value: 1
                }

            ],
            reactions_russia_eu_vs: 1,
            time: Date.now().getTime()
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