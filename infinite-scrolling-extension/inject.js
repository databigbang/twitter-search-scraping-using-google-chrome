var db = [];
var myInfinity = 10000000000;

function getUsers () {
	var user = document.evaluate("//span[@class='username js-action-profile-name']/b", document, null, XPathResult.ANY_TYPE, null);
	var iterator = user.iterateNext();

	var users = [];

	while(iterator) {
		users.push(iterator.textContent);
		iterator = user.iterateNext();
	}

	return users;
}


function getTweets() {
	var tweet = document.evaluate("//p[@class='js-tweet-text tweet-text']", document, null, XPathResult.ANY_TYPE, null);
	var iterator = tweet.iterateNext();

	var tweets = [];

	while (iterator) {
		tweets.push(iterator.textContent);
		iterator = tweet.iterateNext();
	}

	return tweets;
}


function tweetsCounter() {
	var tweets = getTweets();
	var tweetsLength = tweets.length;

	return tweetsLength;
}


function startScraping(tweetsAmount) {
	var tweets = getTweets();
	var users = getUsers();

	var tweetsLength = tweets.length;

	for(var i = 0; i <= tweetsAmount - 1; i++) {
		var item = {"User": users[i], "Tweet": tweets[i]};
		db.push(item);
	};

	var json_text = JSON.stringify(db, null, 2);
	console.log(json_text);
}


function scrollBottom(tweetsAmount) {
	setTimeout(function timeOut() {
		var tweetsLength = tweetsCounter();
		document.body.scrollTop = myInfinity;
		
		if (tweetsLength < tweetsAmount) {
			scrollBottom(tweetsAmount);
		}
		else {
			startScraping(tweetsAmount);		
		}

	}, 100);
}


scrollBottom(100);