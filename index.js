
const express = require('express');
const app= express();

const db = require("@cyclic.sh/dynamodb")

const animals = db.collection("animals")
app.listen(process.env.PORT || 3000)
app.use(express.static('public'));
app.use(express.json({limit: '100mb'}));
app.post('/api', (request, response) => {
	console.log(request.body);
	response.json({
		status: 'success',
		latitude: request.body.latitude,
		longitude: request.body.longitude
	});
	// create an item in collection with key "leo"
	let leo = await animals.set("leo", {
	    type: "cat",
	    color: "orange"
	})

});


