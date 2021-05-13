const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  author: String,
  body: String,
  timestamp: Number,
})

module.exports = mongoose.model('PostSchema', postSchema)
