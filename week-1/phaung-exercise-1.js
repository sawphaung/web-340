var url = require('url');

var parsedURL = url.parse('https://sawphaung.com/profile?name=smith');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
