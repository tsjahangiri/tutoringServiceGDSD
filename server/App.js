const express = require('express')
var bodyParser = require('body-parser')
const userRoutes = require('./routes/user-routes')
const app = express ()
require('dotenv').config()
 
var jsonParser = bodyParser.json()
 

app.use(jsonParser);
app.use('/api/',userRoutes)

app.use(function (req, res, next) {
    next(createError(404));
  });


app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is up and running on port 9090')
})