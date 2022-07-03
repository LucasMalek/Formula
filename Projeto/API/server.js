const User = require('../Formula-main/src/pages/User/index.js')
const Banco = require('./bancodedados.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))


app.post('/User', (req, resp) => {
       Banco.registrarusuario(req.body)
       resp.send('<h1>oi</h1>')
       
})

app.get('/User', (req, res) => {
       res.send(User)
})

app.listen(3003)

