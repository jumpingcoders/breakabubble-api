

const DOMAINS = {
    'ac24.cz': 30,
    'a2larm.cz': 45,
    'cz.sputniknews.com': 0,
    'www.novinky.cz': 45,




    'sptnkne.ws': 0,
    'www.svetkolemnas.info': 0,
    'www.zvedavec.org': 0,
    'www.ac24.cz': 0,
    'www.rodinajezaklad.sk': 0,
    'www.stopautogenocide.sk': 0,
    'www.osud.cz': 0,
    'czech.ruvr.ru': 0,
    'slovak.ruvr.ru': 0,
    'www.zemavek.sk': 0,
    'panobcan.sk': 0,
    'www.czechfreepress.cz': 0,
    'vaseforum.sk': 0,
    'www.slobodnyvysielac.sk': 0,
    'www.hlavnespravy.sk': 0,
    'www.badatel.sk': 0,
    'www.badatel.net': 0,
    'www.protiprudu.org': 0,
    'www.beo.sk': 0,
    'obcianskytribunal.sk': 0,
    'www.sho.sk': 0,
    'www.voxvictims.com': 0,
    'freeglobe.parlamentnilisty.cz': 0,
    'www.magnificat.sk': 0,
    'www.freepub.cz': 0,
    'vkpatriarhat.org.ua': 0,
    'www.spolocnostsbm.com': 0,
    'svobodnenoviny.eu': 0,
    'www.auria.sk': 0,
    'finabul.blog.cz': 0,
    'www.dolezite.sk': 0,
    'www.inespravy.sk': 0,
    'www.nadhlad.com': 0,
    'www.ze-sveta.cz': 0,
    'nwoo.org': 0,
    'orgo-net.blogspot.sk': 0,
    'www.cez-okno.net': 0,
    'www.vlastnihlavou.cz': 0,
    'www.neskutocne.sk': 0,
    'www.bezpolitickekorektnosti.cz': 0,
    'www.eiaktivity.sk': 0,
    'www.nazorobcana.sk': 0,
    'www.alternews.cz': 0,
    'pravdive.eu': 0,
    'www.aeronet.cz': 0,
    'www.slovenskeslovo.sk': 0,

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