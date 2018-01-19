const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();
const config = {
    port: process.env.PORT || 8000
};

//const WebSocketServer = require('websocket').server;



const httpServer = app.listen(config.port);


/*wsServer = new WebSocketServer({
    httpServer
});*/

app.set('json spaces', 2);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./httpApiRouter.js'));


//wsServer.on('request', require('./request.js'));
console.log('WS server running on '+config.port);