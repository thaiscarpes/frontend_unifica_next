import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

mongoose.connect(uri)
  .then(() => { console.log('Banco de dados conectado!') })
  .catch((error) => { console.error('Erro ao conectar ao banco de dados!', error) })