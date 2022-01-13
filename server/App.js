const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const port = 3000;
require("dotenv").config();

var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors());
app.use("/api/", routes);
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Help Me Learn API listening at http://localhost:${port}`);
});
