const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
const userRoutes = require('./routes/user-routes')
const app = express()
require('dotenv').config()

var jsonParser = bodyParser.json()

app.use(cors());
app.use(jsonParser);
app.use('/api/',userRoutes)

app.get("/", (req, res, next) => {
  res.json({"Message":"It is running"});
});

app.use(function (req, res, next) {
    next(createError(404));
  });