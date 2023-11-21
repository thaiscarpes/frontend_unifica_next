//CRIA UM MODELO (MODEL) QUE É RESUMIDAMENTE UM SCHEMA (COLEÇÃO) NO BANCO DE DADOS

import mongoose from 'mongoose'

//CRIA O SCHEMA PARA OS USUÁRIOS E DEFINE OS CAMPOS
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: false,
    }
},
    //ADICIONA NA COLEÇÃO UM CAMPO PARA ARMAZENAR A DATA E HORA DE QUANDO O REGISTRO FOI REALIZADO
    { timestamps: true })

//EXPORTA O MODELO CASO NÃO EXISTA
module.exports = mongoose.models.User || mongoose.model('User', userSchema)