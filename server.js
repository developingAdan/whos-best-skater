const express = require('express')
const app = express()
const PORT = 8000
// const cors = require('cors') // we install this so that heroku successfully communicates with our API

// app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/skaters', (request, response) => {
    console.log(response.json())
})

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})
