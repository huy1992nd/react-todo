var  MessageController  = require('../message_controller');
class SocketServer {
    constructor() {
        this.listSocket = {};
        this.listCoreClient = {};
        this.listClient = {};
    }

    Init(server) {
        this.server = server;
        this.server.on('connection', (client) => {
            console.log('client connect', client.id);
            client.on('event', (data) => {
                console.log("data:", data);
            });
            client.on("get_message", (data) => {
                console.log('get_message', data);
                MessageController.getMessage(client,data.group);
            })

            client.on('disconnect', () => {
                console.log('disconnect', client.id)
            });
        });
    }
}

module.exports = new SocketServer();