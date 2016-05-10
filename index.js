var key_obj = require('./key.js')
var Twit = require('twit');

var T = new Twit(key_obj);

T.post('statuses/update', { status: 'hello?' }, function(err, data, response) {
  console.log(data);
});