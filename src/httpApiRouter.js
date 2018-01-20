const express = require('express');
const Reaction = require('./mongoose/Reaction.js');
var requestPromise = require('request-promise');
var cheerio = require('cheerio');


const router = express.Router();

router.use('/*', function (req, res, next) {
    next();
});


router.get('/users/:userId', async function (req, res, next) {


        try {

            const reactions = await
                Reaction.find({userId: req.params.userId});
            const sentiments = await
                Promise.all(reactions.map(async function (reaction) {

                        const htmlString = await
                            requestPromise(reaction.url);


                        $ = cheerio.load(htmlString);


                        const contents = [];

                        for(const element of $('*:not(:has(*))').toArray()){


                            let contentText = cheerio(element).text();
                            contentText = contentText.trim();


                            if(
                                contentText.length > 50 &&
                                contentText[0] !== '<'

                            ){
                                contents.push(contentText);
                            }




                        }

                        return contents;


                        const content = $('body').text();



                        return content;


                        const analysis = JSON.parse(await requestPromise({
                            method: 'POST',
                            uri: 'https://demo.geneea.com/interpretDoc',
                            json: true,
                            body: {
                                domain: false,
                                language: 'cs',
                                refDate: 'NOW',
                                text: htmlString,
                            }
                        }));


                        return analysis;

                    }
                ))
            ;


            res
                .status(200)
                .json({
                    userId: 'putinlover',
                    sentiments,
                    reactions: [
                        {
                            type: 'RUSSIA',
                            value: 99//0-100
                        },
                        {
                            type: 'EU',
                            value: 1//0-100
                        }

                    ],
                    reactions_russia_vs_eu: 0,//0-100
                    time: new Date().getTime() / 1000
                });

        }catch(exeption){
            res
                .status(500)
                .json({
                    status: 'error',
                    message: exeption.message
                });

            throw exeption;
        }

    }
)
;


router.post('/users/:userId/reactions', async function (req, res, next) {


        const reaction = new Reaction({
            "userId": req.params.userId,
            "reaction": req.body.reaction,
            "url": req.body.url,
            "date": new Date().getTime()
        });


        reaction.save(function (error) {


            if (error) {

                res
                    .status(400)
                    .json({
                        status: 'error',
                        message: error.message,
                    });

            } else {

                res
                    .status(200)
                    .json({
                        status: 'ok',
                        message: 'saved',
                    });

            }


        });


        //console.log(reaction);
        /*res
            .status(200)
            .json({
                status: Reaction.validate(req.body),
            });*/
    }
)
;


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