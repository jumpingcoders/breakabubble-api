

const DOMAINS = {
    'ac24.cz': 70,
    'a2larm.cz': 55,
    'cz.sputniknews.com': 100,
    'www.novinky.cz': 55,




    'sptnkne.ws': 100,
    'www.svetkolemnas.info': 100,
    'www.zvedavec.org': 100,
    'www.ac24.cz': 100,
    'www.rodinajezaklad.sk': 100,
    'www.stopautogenocide.sk': 100,
    'www.osud.cz': 100,
    'czech.ruvr.ru': 100,
    'slovak.ruvr.ru': 100,
    'www.zemavek.sk': 100,
    'panobcan.sk': 100,
    'www.czechfreepress.cz': 100,
    'vaseforum.sk': 100,
    'www.slobodnyvysielac.sk': 100,
    'www.hlavnespravy.sk': 100,
    'www.badatel.sk': 100,
    'www.badatel.net': 100,
    'www.protiprudu.org': 100,
    'www.beo.sk': 100,
    'obcianskytribunal.sk': 100,
    'www.sho.sk': 100,
    'www.voxvictims.com': 100,
    'freeglobe.parlamentnilisty.cz': 100,
    'www.magnificat.sk': 100,
    'www.freepub.cz': 100,
    'vkpatriarhat.org.ua': 100,
    'www.spolocnostsbm.com': 100,
    'svobodnenoviny.eu': 100,
    'www.auria.sk': 100,
    'finabul.blog.cz': 100,
    'www.dolezite.sk': 100,
    'www.inespravy.sk': 100,
    'www.nadhlad.com': 100,
    'www.ze-sveta.cz': 100,
    'nwoo.org': 100,
    'orgo-net.blogspot.sk': 100,
    'www.cez-okno.net': 100,
    'www.vlastnihlavou.cz': 100,
    'www.neskutocne.sk': 100,
    'www.bezpolitickekorektnosti.cz': 100,
    'www.eiaktivity.sk': 100,
    'www.nazorobcana.sk': 100,
    'www.alternews.cz': 100,
    'pravdive.eu': 100,
    'www.aeronet.cz': 100,
    'www.slovenskeslovo.sk': 100,

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