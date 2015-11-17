var expect = require('chai').expect;
var yuri = require('../');

describe('Yuri', function () {
  it('builds a url', function () {
    var url = yuri
              .protocol('mongodb')
              .slashes(true)
              .auth('user:password')
              .hostname('localhost')
              .port(27017)
              .pathname('mydb')
              .query({
                foo: 'bar',
                fizz: 'buzz'
              })
              .hash('myhash')
              .format();

    expect(url).to.equal('mongodb://user:password@localhost:27017/mydb?foo=bar&fizz=buzz#myhash');
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

  it('formats pathname with strings and ints', function(){
    var url = yuri('http://www.zillow.com')
              .pathname(['1', 'two', 3, '/four'])
              .format();

    expect(url).to.equal('http://www.zillow.com/1/two/3/four');
  });

  it('formats pathname without double slashes', function () {
    var url = yuri('http://www.zillow.com')
              .pathname(['/one/', '/two/three/four/', '/five/'])
              .format();

    expect(url).to.equal('http://www.zillow.com/one/two/three/four/five/');
  });
});
