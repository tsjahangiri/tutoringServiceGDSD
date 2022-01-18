const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

//chat- socket IO server instance
const http = require('http');
const socketIO = require("socket.io");
const server = http.Server(app);
var io = socketIO(server);

const port = 3000;
require("dotenv").config();

var jsonParser = bodyParser.json();

app.use(cors());
app.use(jsonParser);
app.use(cors());
app.use("/api/", routes);
// app.use(function (req, res, next) {
//   next(createError(404));
// });

//cors policy added
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

server.listen(port, () => {
  console.log(`Help Me Learn API listening at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Help Me Learn API listening at http://localhost:${port}`);
// });
