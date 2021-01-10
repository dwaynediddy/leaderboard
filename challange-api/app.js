const express = require('express')

const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('we are home')
})

app.get('/posts', (req, res) => {
    res.send('we are post')
})

//server
app.listen(3000)