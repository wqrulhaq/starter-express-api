
const express = require('express');
const app= express();
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
});
