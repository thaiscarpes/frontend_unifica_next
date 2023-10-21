import mongoose from 'mongoose'
import pointerSchema from './pointerSchema'

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

module.exports = mongoose.models.Location || mongoose.model('Location', locationSchema)