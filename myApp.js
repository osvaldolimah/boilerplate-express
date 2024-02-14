const bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config();



/* Questão 9 
app.get('/now', (req, res, next) => {
    const agora = new Date().toString();
    req.time = agora;
    next();
  }, (req, res) => {
    res.json({"time": req.time})
  });
*/

/* Questão 10 

app.get("/name", (req, res) => {
  var osvaldo = req.query.first;
  var holanda = req.query.last;
  var {first: osvaldo, last: holanda} = req.query

  res.json({name: `${osvaldo} ${holanda}` })
});

*/

/* Questão 11 

Primeiro: Configurar o middleware 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/name", (req, res) => {
  var osvaldo = req.body.first;
  var holanda = req.body.last;
  var {first: osvaldo, last: holanda} = req.body

  res.json({name: `${osvaldo} ${holanda}` })
});

*/









































 module.exports = app;
