var url = require('url');

var slice = Array.prototype.slice;
var isArray = Array.isArray;
var methods = [
  'pathname',
  'protocol',
  'port',
  'hostname',
  'query'
];

/***************************
 * Yuri Factory
 ***************************/
function yuriFactory(method) {
  return function (/*arguments*/) {
    var args = slice.call(arguments);
    var yuri = new Yuri({});

    return yuri[method].apply(yuri, args);
  }
}

methods.forEach(function (method) {
  Yuri[method] = yuriFactory(method);
});

/***************************
 *  Yuri
 ***************************/
function Yuri(config) {
  if (!(this instanceof Yuri)) {
    return new Yuri(config);
  }

  if (typeof config === 'string') {
    this.url = url.parse(config);
  } else {
    this.url = config || {};
  }
}

Yuri.prototype.pathname = function (/*arguments*/) {
  var args = slice.call(arguments);

  if (args.length === 1 && isArray(args[0])) {
    args = args[0];
  }

  this.url.pathname = args.join('/');

  return this;
};

Yuri.prototype.protocol = function (protocol) {
  this.url.protocol = protocol;

  return this;
};

Yuri.prototype.port = function (port) {
  this.url.port = port;

  return this;
};

Yuri.prototype.hostname = function (hostname) {
  this.url.hostname = hostname;

  return this;
};

Yuri.prototype.query = function (query) {
  this.url.query = query;

  return this;
};

Yuri.prototype.format = function () {
  return url.format(this.url);
};

module.exports = Yuri;
