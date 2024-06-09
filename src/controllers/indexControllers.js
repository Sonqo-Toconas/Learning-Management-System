const db = require('../database/models')
let error = "Error de clave"

const indexControllers = {
    index: (req, res) => {
        res.render('index')
    }
}

module.exports = indexControllers