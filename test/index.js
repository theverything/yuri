var expect = require('chai').expect;
var yuri = require('../');

describe('URL Builder', function () {
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
});
