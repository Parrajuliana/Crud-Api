// Criar a rota para acessar API
const cors = require ('cors')
const express = require ('express')
const app = express()

app.use(cors()) //qualquer pessoa pode acessar a API

  app.get('/', function (req, res) { 
    res.send('Hello')
  })

app.listen('4567')