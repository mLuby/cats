const axios = require("axios")
const app = require("express")()
const PORT = 3000

// enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://0.0.0.0:8080")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get("/cat-facts", (req, res) => {
  const url = "https://catfacts-api.appspot.com/api/facts?number=25"
  axios.get(url).then(response => res.send(response.data))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`)) // eslint-disable-line no-console
