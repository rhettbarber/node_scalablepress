var express = require('express');
var path = require('path');
var http = require('http');
var request = require('request');
var app = express();

app.use(express.static(path.join(__dirname, 'app')));

console.log("run /api/design");

app.get('/api/design', function(req, res){
	
	var url = 'https://username:test_hcisZVvL5uMxU9HvwFL3gQ@api.scalablepress.com/v2/design/';

	var options = {
		"type":"dtg",
		"sides[front][artwork]":"https://i.pinimg.com/originals/ca/a9/df/caa9df0ae36595e7d4b9961596adc218.png",
		"sides[front][dimensions][width]":"5",
		"sides[front][position][horizontal]":"C",
		"sides[front][position][offset][top]":"2.5"
	};

	request.post({url: url, formData: options}, function(err, response, body) {
	  if (err) {
	    return console.error('post failed:', err);
	  }
	  var data = JSON.parse(body)
	  res.json(data);
	   console.log('Post successful!  Server responded with:', data.designId);

        res.app.set('theDesignId', data.designId);

	});
});


console.log("run /api/quote");

app.get('/api/quote', function(req, res){

	var url = 'https://username:test_hcisZVvL5uMxU9HvwFL3gQ@api.scalablepress.com/v2/quote/';

    var theDesignId = res.app.get('theDesignId');

	var options = {
		"type":"screenprint",
		"sides[front]":"1",
		"products[0][id]":"american-apparel-50-50-t-shirt",
		"products[0][color]":"black",
		"products[0][quantity]":"1",
		"products[0][size]":"lrg",
		"address[name]":"Kyle Conkright",
		"address[address1]":"859 N Vista St",
		"address[city]":"Los Angeles",
		"address[state]":"CA",
		"address[zip]":"90046",
		"designId": theDesignId //"5f8707ce01b0a749d63317aa"
	};

	request.post({url: url, formData: options}, function(err, response, body) {
	  if (err) {
	    return console.error('post failed:', err);
	  }
	  res.json(JSON.parse(body));
	  console.log('Post successful!  Server responded with:', body);
	});
});








// app.get('/shirt', function(req, res){
	
// 	var url = 'https://username:test_hcisZVvL5uMxU9HvwFL3gQ8@api.scalablepress.com/v2/products/american-apparel-50-50-t-shirt/items/';

// 	request.get({url: url}, function(err, response, body) {
// 	  if (err) {
// 	    return console.error('post failed:', err);
// 	  }
// 	  res.json(JSON.parse(body));
// 	});
// });


//DEFAULT TO ANGULAR IF NO SERVER ROUTES DEFINED
app.all('*', function(req, res) {
  res.sendFile('/app/index.html', { root: __dirname });
});

var port = process.env.PORT || 5000;
app.listen(port);