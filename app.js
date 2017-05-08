var express = require('express');
var app = express();
var chemicalCompounds = require('./routes/chemicalCompounds');
var chemistryDictionary = require('./routes/chemistryDictionary');
var elements = require('./routes/elements');
var feedback = require('./routes/feedback');
var quickReference = require('./routes/quickReference');
var bodyParser = require('body-parser');


app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
    next();
});
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
    response.send('Hello World!')
});

//Chemical Compounds
app.get('/api/chemicalCompounds', chemicalCompounds.getChemicalCompounds); //get all compounds

//Chemistry Dictionary
app.get('/api/chemistryDictionary', chemistryDictionary.getChemistryDictionary); // get all items in dictionary

//Elements
app.get('/api/elements', elements.getElements); // get all elements

//Feedback
app.get('/api/feedback', feedback.getFeedback); //get feedback

//Quick Reference
app.get('/api/quickReference', quickReference.getQuickReference); //get quick reference list


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
