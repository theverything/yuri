var expect = require('chai').expect;
var yuri = require('../');

describe('URL Builder', function () {
  it('builds a url', function () {
    var url = yuri
              .hostname('localhost')
              .protocol('https')
              .pathname('one', 'two', 'three')
              .query({
                foo: 'bar',
                fizz: 'buzz'
              })
              .format();

    expect(url).to.equal('https://localhost/one/two/three?foo=bar&fizz=buzz');
  });

  it('can use array for pathname', function () {
    var url = yuri
              .hostname('localhost')
              .pathname(['one', 'two', 'three'])
              .format();

    expect(url).to.equal('http://localhost/one/two/three');
  });

  it('defaults to http if no protocol is present', function () {
    var url = yuri.hostname('localhost').format();

    expect(url).to.equal('http://localhost');
  });

  it("throws an error if hostname isn't given", function () {
    expect(yuri.hostname).to.throw(TypeError, 'you must have a hostname');
  });

  it("can override the default protocol", function () {
    yuri.config({protocol: 'https'});
    var url = yuri.hostname('google.com').pathname('maps').format();

    expect(url).to.equal('https://google.com/maps');
  });
});
