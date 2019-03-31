const express = require("express");
const bodyParser = require("body-parser");
const PORT = 12138;

// create express app
const app = express();

// parser request of content type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configuring the datebase
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the datebase
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the MongoDB successfully!")
}).catch(err => {
    console.log("Could not connect to the MongoDB, Exiting now...", err)
    process.exit();
});


// define a simple route
app.get('/', (req, res) => {
    res.json({"message" : "It's the beginning of a note taking application"})
});

// reuqire notes routes
require('./app/routes/note.routes.js')(app);

// define a listening port
app.listen(PORT, () => {
    console.log("The server is listening on the port " + PORT)
});