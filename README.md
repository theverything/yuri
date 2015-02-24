# Yuri

Yuri is a chainable url builder.

It is just a simple abstraction over the node `url.format` method.

## Install

`npm install yuri`

## Usage

You can build a url from scratch.

``` javascript
var yuri = require('yuri');

var uri = yuri
          .protocol('http')
          .hostname('mydomain.com')
          .pathname('my', 'path')
          .query({
            foo: 'bar',
            fizz: 'buzz'
          })
          .format();

console.log(uri) // "http://mydomain.com/my/path?foo=bar&fizz=buzz"
```

Or you can initialize yuri with either a [url object](http://nodejs.org/api/url.html#url_url) or a url string.

``` javascript
var yuri = require('yuri');

var uri = yuri({
            protocol: 'http',
            hostname: 'mydomain.com'
          })
          .pathname('my', 'path')
          .query({
            foo: 'bar',
            fizz: 'buzz'
          })
          .format();

// Or

var uri = yuri('http://mydomain.com')
          .pathname('my', 'path')
          .query({
            foo: 'bar',
            fizz: 'buzz'
          })
          .format();



console.log(uri) // "http://mydomain.com/my/path?foo=bar&fizz=buzz"
```

`pathname` excepts an array as well.

``` javascript
var yuri = require('yuri');

var uri = yuri
          .pathname(['my', 'path', 'name'])
          .format();

console.log(uri) // "my/path/name"
```

## License

The MIT License (MIT)

Copyright (c) 2015 Jeffrey Horn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
