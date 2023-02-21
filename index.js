const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yoooo!')
})
app.listen(process.env.PORT || 3000)
app.post('/api', (request, response) => {
	console.log(request.body);
	response.json({
		status: 'success',
		latitude: request.body.lat,
		longitude: request.body.lon
	});
});
