var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");









app.listen(PORT, function() {
	console.log("App listening on PORT" + PORT);
})