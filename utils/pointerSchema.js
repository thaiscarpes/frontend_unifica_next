//CRIA UM MODELO (MODEL) QUE É RESUMIDAMENTE UM SCHEMA (COLEÇÃO) NO BANCO DE DADOS

import mongoose from 'mongoose'

//CRIA UM MODELO PARA ARMAZENAR CORRETAMENTE A LATITUDE E LONGITUDE DOS LOCAIS CADASTRADOS, 
//ESTE MODELO SERÁ VINCULADO AO MODELO DE LOCAIS
const pointerSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
})

//EXPORTA O MODELO
module.exports = pointerSchema