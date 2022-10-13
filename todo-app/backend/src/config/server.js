const port = 3003
const bodyParder = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParder.urlencoded({extended: true}))
server.use(bodyParder.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server