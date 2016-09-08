var util = require('util'),
var winston = require('winston');
var airbrake = require('airbrake');

var ErrbitLogger = winston.transports.ErrbitLogger = function (options) {
  this.name = 'errbitLogger';
  if (!options || !options.host || !options.key) {
    throw new Error('host or key property is missing from ErrbitLogger init.');
  }
  this.host = options.host;
  this.key = options.key;
  this.env = options.env || 'development';
  this.client = airbrake.createClient(this.key, this.env);
  this.client.host = this.host;
  this.client.serviceHost = this.host;
  this.level = options.level || 'error';
};

util.inherits(ErrbitLogger, winston.Transport);

ErrbitLogger.prototype.log = function (level, msg, meta, callback) {
  var error = new Error(msg);
  this.client.notify(error, function(err, url) {
    if (err) {
      return callback(err, false);
    }
    return callback(null, true);
  });
};
