
//CRIA UM MODELO (MODEL) QUE É RESUMIDAMENTE UM SCHEMA (COLEÇÃO) NO BANCO DE DADOS

import mongoose from 'mongoose'

//IMPORTA O MODELO POINTER PARA SER USADO NO CAMPO POINTER DENTRO DE LOCATION
import pointerSchema from './pointerSchema'

//CRIA OS CAMPOS DAS LOCALIZAÇÕES QUE SERÃO CADASTRADAS
const locationSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  address: String,
  phone: Number,
  extension: Number,
  startJourney: String,
  endJourney: String,
  pointer: {
    type: pointerSchema,
    index: '2dsphere'
  }
})

//EXPORTA O MODELO CASO NÃO EXISTA
module.exports = mongoose.models.Location || mongoose.model('Location', locationSchema)