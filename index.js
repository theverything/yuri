/***************************
 * Modules
 ***************************/
var url = require('url');

/***************************
 * Yuri API
 ***************************/
var methods = [
  'href', // The full URL that was originally parsed. Both the protocol and host are lowercased.
  'protocol', // The request protocol, lowercased.
  'slashes', // The protocol requires slashes after the colon
  'host', // The full lowercased host portion of the URL, including port information.
  'auth', // The authentication information portion of a URL.
  'hostname', // Just the lowercased hostname portion of the host.
  'port', // The port number portion of the host.
  'pathname', // The path section of the URL, that comes after the host and before the query, including the initial slash if present.
  'search', // The 'query string' portion of the URL, including the leading question mark.
  'path', // Concatenation of pathname and search.
  'query', // Either the 'params' portion of the query string, or a querystring-parsed object.
  'hash' // The 'fragment' portion of the URL including the pound-sign.
];

/***************************
 * Yuri Constuctor
 ***************************/
var Yuri = module.exports = function Yuri(config) {
  if (!(this instanceof Yuri)) {
    return new Yuri(config);
  }

  if (typeof config === 'string') {
    this.url = url.parse(config);
  } else {
    this.url = config || {};
  }
};

/********************************************************
 * Yuri Factory
 * Create a static method on the Yuri constuctor for
 * each protype, which acts as a factory for creating
 * a Yuri instance. This allows one to use Yuri directly
 * without initializing yuri.

 * example -
 * var yo = yuri
 *          .protocol('http')
 *          .hostname('www.yo.com')
 *          .format();
 ********************************************************/
function yuriFactory(method) {
  return function (arg) {
    var yuri = Yuri({});

    return yuri[method].call(yuri, arg);
  }
}

methods.forEach(function (method) {
  Yuri[method] = yuriFactory(method);
});

/***************************
 * Yuri Prototypes
 ***************************/
Yuri.prototype.href = function (href) {
  this.url.href = href;

  return this;
};

Yuri.prototype.protocol = function (protocol) {
  this.url.protocol = protocol;

  return this;
};

Yuri.prototype.slashes = function (slashes) {
  this.url.slashes = slashes;

  return this;
};

Yuri.prototype.host = function (host) {
  this.url.host = host;

  return this;
};

Yuri.prototype.auth = function (auth) {
  this.url.auth = auth;

  return this;
};

Yuri.prototype.hostname = function (hostname) {
  this.url.hostname = hostname;

  return this;
};

Yuri.prototype.port = function (port) {
  this.url.port = port;

  return this;
};

Yuri.prototype.pathname = function (pathname) {
  if (Array.isArray(pathname)) {
    this.url.pathname = pathname.join('/');
  } else {
    this.url.pathname = pathname;
  }

  return this;
};

Yuri.prototype.search = function (search) {
  this.url.search = search;

  return this;
};

Yuri.prototype.path = function (path) {
  this.url.path = path;

  return this;
};

Yuri.prototype.query = function (query) {
  this.url.query = query;

  return this;
};

Yuri.prototype.hash = function (hash) {
  this.url.hash = hash;

  return this;
};

Yuri.prototype.format = function () {
  return url.format(this.url);
};

Yuri.prototype.toString = Yuri.prototype.format;
