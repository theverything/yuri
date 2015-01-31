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
 * Yuri
 ***************************/
var Yuri = {};

function yuriSetup(method) {
  return function (/*arguments*/) {
    var args = slice.call(arguments);
    var yuri = new Builder();

    return yuri[method].apply(yuri, args);
  }
}

methods.forEach(function (method) {
  Yuri[method] = yuriSetup(method);
});

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
  return url.format(this.url);
};

module.exports = Yuri;
