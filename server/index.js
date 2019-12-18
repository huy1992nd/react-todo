require('./lib/prototype.custom');
var apiController = require('./controller/api.controller');
require('events').EventEmitter.prototype._maxListeners = 100;
startService = function() {
    apiController.Init();
}

startService();
