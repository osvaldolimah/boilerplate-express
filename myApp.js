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









































 module.exports = app;
