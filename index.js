var key_obj = require('./key.js')
var Twit = require('twit');

var T = new Twit(key_obj);

var stream = T.stream('user');

stream.on('tweet', function (tweet) {
	var screenName = tweet.user.screen_name;
	var reply = "nice meme";

	if (screenName != "nice_meme_bot") {
		var msg = "@" + screenName + " " + reply;

		return T.post('statuses/update', { status: msg }, function() {
			console.log("@" + screenName + " made a nice meme");
		});
	}

});