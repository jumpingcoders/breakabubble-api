var requestPromise = require('request-promise');
var cheerio = require('cheerio');
var URI = require('urijs');









module.exports = async function getContent(url){

    const homepageUrl = URI(url).path("/").toString();

    const htmlStrings1 = await requestPromise(url);
    const htmlStrings2 = await requestPromise(url);








    return getHtmlContents(htmlString);





}



function getHtmlContents(htmlString){

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

}