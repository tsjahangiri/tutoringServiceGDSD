const express = require('express')
const bodyParser = require('body-parser')
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

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is up and running on port 9090')
})