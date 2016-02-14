const axios = require('axios')
const express = require('express')
const app = express()

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/cat-facts', (req, res) => {
  const url = 'https://catfacts-api.appspot.com/api/facts?number=25'
  axios.get(url).then(response => res.send(response.data))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
