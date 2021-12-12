const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to HelpMeLearn API')
})

app.listen(port, () => {
  console.log(`HelpMeLearn API listening at http://localhost:${port}`)
})
