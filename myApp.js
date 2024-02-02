const bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config();




app.use(bodyParser.urlencoded({extended: false}))
app.get('/json', (req, res) => {

    const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

    

    
    if (MESSAGE_STYLE === "uppercase") {
        message = "Hello json".toUpperCase();
    } else {
        message = "Hello json";
    }
        res.json({"message": message});
});








































 module.exports = app;
