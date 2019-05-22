const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    excercises: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);