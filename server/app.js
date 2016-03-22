var express = require('express');
var app = express();
var path = require('path');
var kappa = require('./public/assets/data/kappa.json');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 8000));

app.get('/kappa', function(req, res) {
  var kappaArray = kappa.students;
    console.log(kappaArray);
    res.send(kappaArray);
});

app.get('/*', function(req,res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
