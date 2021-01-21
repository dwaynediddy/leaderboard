const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/Login', (req, res,) =>{
    res.send({ 
        token: '123456'
    })
})

app.listen(5000, () => {
    console.log('you are on the server')
})
