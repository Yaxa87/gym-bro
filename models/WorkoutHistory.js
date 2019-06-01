const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkoutHistorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    workouts: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = WorkoutHistory = mongoose.model('workouthistory', WorkoutHistorySchema);