const mongoose = require('mongoose')
const db = require('../config/db')
const Schema = mongoose.Schema



const SchemaUser = new Schema()

module.exports = db.model('User', SchemaUser)