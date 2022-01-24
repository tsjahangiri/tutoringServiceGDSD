const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const path = require("path");
const app = express();
const socketIO = require("./socketIO/socketIO");

const http = require("http");
const server = http.createServer(app);

socketIO(server);

const port = 8080;

require("dotenv").config();

var jsonParser = bodyParser.json();
app.use("/public/images", express.static(path.join(__dirname, "public/images")));

app.use(cors());
app.use(jsonParser);
app.use(cors());
app.use("/api/", routes);

server.listen(port, () => {
  console.log(`Help Me Learn API listening at http://localhost:${port}`);
});
