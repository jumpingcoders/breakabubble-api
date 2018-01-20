const express = require('express');
const Reaction = require('./mongoose/Reaction.js');

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
                    value: 100//0-100
                },
                {
                    type: 'EU',
                    value: 1//0-100
                }

            ],
            reactions_russia_vs_eu: 0,//0-100
            time: new Date().getTime()/1000
        });
});


router.post('/users/:hash/reactions', function (req, res, next) {






    const reaction = new Reaction(req.body);
    reaction.save(function(error) {


        if(error){

            res
                .status(400)
                .json({
                    status: 'error',
                    message: error.message
                });

        }else{

            res
                .status(200)
                .json({
                    status: 'ok',
                    message: 'saved'
                });

        }


    });


    console.log(reaction);
    /*res
        .status(200)
        .json({
            status: Reaction.validate(req.body),
        });*/
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