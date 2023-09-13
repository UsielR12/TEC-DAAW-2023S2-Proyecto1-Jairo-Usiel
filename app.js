const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.static('styles'))
app.use(express.static('views'))
app.use(express.static('controllers'))
app.use(require('./routes/gameRoutes'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`)
})
