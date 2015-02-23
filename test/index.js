var expect = require('chai').expect;
var yuri = require('../');

describe('Yuri', function () {
  it('builds a url', function () {
    var url = yuri
              .protocol('https')
              .hostname('localhost')
              .port(3000)
              .pathname('one', 'two', 'three')
              .query({
                foo: 'bar',
                fizz: 'buzz'
              })
              .format();

    expect(url).to.equal('https://localhost:3000/one/two/three?foo=bar&fizz=buzz');
  });

  it('can use array for pathname', function () {
    var url = yuri
              .pathname(['one', 'two', 'three'])
              .format();

    expect(url).to.equal('one/two/three');
  });

  it('can be initialized with a url', function () {
    var url = yuri('http://www.zillow.com')
              .pathname(['one', 'two', 'three'])
              .format();

    expect(url).to.equal('http://www.zillow.com/one/two/three');
  });

  it('can be initialized with a config object', function () {
    var url = yuri({
                protocol: 'http',
                hostname: 'www.zillow.com',
              })
              .pathname(['one', 'two', 'three'])
              .format();

    expect(url).to.equal('http://www.zillow.com/one/two/three');
  });
});
