var express = require('express');
var CodeBreaker = require('./main')

var app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/setsecret/:secret', function(req, res){
  number = req.params.secret;
  CodeBreaker.setNumber(number);
  res.send({message : 'Ok, let the game begin'});
});

app.listen(app.get('port'), function(){
  console.log('NodeJS app listening on port', app.port)
})

module.exports = app;


app.get('/guess/:number', function(req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)});
});
