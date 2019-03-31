const express = require("express");
const bodyParser = require("body-parser");
const PORT = 12138;

// create express app
const app = express();

// parser request of content type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message" : "It's the beginning of a note taking application"})
});

// define a listening port
app.listen(PORT, () => {
    console.log("The server is listening on the port " + PORT)
});