const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    detail: String,

}, { timestamps: true})

module.exports = mongoose.model('Todo', todoSchema)