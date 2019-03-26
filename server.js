// Init project
const express = require('express');
const app = express();

// Configure public access folder, as per http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// App homepage
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Start listening
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
