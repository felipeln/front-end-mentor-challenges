const express = require('express')

const routes = express.Router()



routes.get('/',(req,res) =>{
    const dados = require('./data')

    return res.render('./index.njk', {desafios: dados})
}) 



module.exports = routes