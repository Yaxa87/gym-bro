const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ExcerciseSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = Excercise = mongoose.model('excercise', ExcerciseSchema);