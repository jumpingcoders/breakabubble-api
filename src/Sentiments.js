

const DOMAINS = {
    'ac24.cz': 30,
    'a2larm.cz': 45,
    'cz.sputniknews.com': 0,
    'www.novinky.cz': 45,

};


const REACTIONS = {
    'IGNORE': -.1,
    'LIKE': 1,
    'LOVE': 2,
    'HAHA': 1.5,
    'WOW': 3,
    'SAD': 0.8,
    'ANGRY': -1
}




module.exports = function getSentimensFromReaction(reaction){



    const reactions_russia_vs_eu = DOMAINS[extractHostname(reaction.url)];


    if(typeof reactions_russia_vs_eu === 'number'){



        return(
            {
                reactions_russia_vs_eu: reactions_russia_vs_eu,
                weight: REACTIONS[reaction.reaction]||0
            }
        )





    }else{
        return(
            {reactions_russia_vs_eu: 0, weight: 0}
        )
    }
};


function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}