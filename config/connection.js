const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://amartrain:Alex.trumpet1@first.awf1l9z.mongodb.net/');

module.exports = mongoose.connection;