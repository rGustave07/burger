const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const xprsHandleBars = require('express-handlebars');

let app = express();
let PORT = process.env.port || 3000;

// Handle the use cases
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Handle the engine cases
app.engine("handlebars", xprsHandleBars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require('./controllers/burgers_controller.js');
app.use("/", routes);

app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
