var express = require('express');
const config = require('config');
let socketServer = require('./socket/socket.server')
const cors = require('cors');
var bodyParser = require('body-parser');
class ApiController {
  constructor() {
    this.app = express();
    this.http = require('http').Server(this.app);
    this.io = require('socket.io')(this.http);
  }

  Init() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use((err, req, res, next) => {
      if (err) {
        log.warn('Invalid Request data');
        res.send('Invalid Request data');
      } else {
        next()
      }
    })
    this.app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    })


    this.LoadData();

  }

  LoadData() {
    socketServer.Init(this.io);
    this.http.listen(config.get("port"), () => {
      console.log('start listen on port', config.get("port"));
    });
  }

}

module.exports = new ApiController();
