//ARQUIVO DE CONFIGURALÇAO DE CONEXÃO COM O BANCO DE DADOS

import mongoose from 'mongoose'

//IMPORTA A URI DE CONEXÃO COM O MONGODB DAS VARIÁVEIS DE AMBIENTE
const uri = process.env.MONGODB_URI

//FUNÇÃO DE CONEXÃO COM O BANCO DE DADOS
mongoose.connect(uri)
  .then(() => { console.log('Banco de dados conectado!') })
  .catch((error) => { console.error('Erro ao conectar ao banco de dados!', error) })