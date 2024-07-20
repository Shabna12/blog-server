require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')

require('./db/connection')

const bServer = express()

bServer.use(cors())
bServer.use(express.json())
bServer.use(router)
bServer.use('/uploads',express.static('./Uploads'))

const PORT = 3000 || process.env.PORT

bServer.listen(PORT,() => {
    console.log(`Blog Server started at PORT : ${PORT}`);
})

bServer.get('/',(req,res) => {
    res.status(200).send(`<h1 style='color:darkBlue'>Blog Server started, and waiting for Client req !!</h1>`)
})

bServer.post('/',(req,res) => {
    res.status(200).send(`POST REQUEST`)
})

