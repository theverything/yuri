var url = require('url');

var slice = Array.prototype.slice;
var isArray = Array.isArray;

/***************************
 * The Yuri config
 ***************************/
var Yuri = {
  config: function (opts) {
    this.protocol = opts.protocol;
  },

  hostname: function (hostname) {
    if (!hostname) {
      throw new TypeError('you must have a hostname');
    }

    var yuri = new Builder();
    return yuri.hostname(hostname).protocol(this.protocol);
  }
};

/***************************
 *  Yuri DSL API
 ***************************/
function Builder() {
  this.url = {};
}

Builder.prototype.pathname = function (/*arguments*/) {
  var args = slice.call(arguments);

  if (args.length === 1 && isArray(args[0])) {
    args = args[0];
  }

  this.url.pathname = args.join('/');

  return this;
};

Builder.prototype.protocol = function (protocol) {
  this.url.protocol = protocol;

  return this;
};

Builder.prototype.port = function (port) {
  this.url.port = port;

  return this;
};

Builder.prototype.hostname = function (hostname) {
  this.url.hostname = hostname;

  return this;
};

Builder.prototype.query = function (query) {
  this.url.query = query;

  return this;
};

Builder.prototype.format = function () {
  if (!this.url.protocol && this.url.hostname) {
    this.url.protocol = 'http';
  }

  return url.format(this.url);
};

module.exports = Yuri;
