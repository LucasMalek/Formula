const mongoose = require('mongoose');

const Usermodel = mongoose.model('User', {
    email: String,
    senha: String,
    nome: String,
    cidade: String,
    descricao: String
})

module.exports = Usermodel