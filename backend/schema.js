const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://poddarsourabh9939:Sourabhh%40123@cluster0.scewquy.mongodb.net/login')

const userSchema = new mongoose.Schema({
    username: Number,
    password: Number
})

const User = mongoose.model('User', userSchema)

module.exports = { User }