var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./models'),
    controllers = require('./controllers');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));
// need to add this so we can accept request payloads from angular
app.use(bodyParser.json());

app.use('/vendor', express.static(__dirname + '/bower_components'));

// ROUTES //
//Json api endpoints (linked to controllers)



// HTML ENDPOINTS //

app.get('/', function landingPage(req, res){
  res.sendFile(__dirname +_ '/views/index.html');
});

app.get('/templates/:name', function templates(req, res){
  var name = req.params.animalName;
  res.sendFile(__dirname + '/views/templates/' + animalName + '.html');
});

// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

//listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express servier is running on local host http://localhost:3000/');
});
