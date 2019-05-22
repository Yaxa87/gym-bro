const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Workout model
const WorkoutHistory = require('../../models/WorkoutHistory');

// @route   GET api/workout
// @desc    Get workouts list
// @access  Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    WorkoutHistory.findOne({user: req.user.id})
        .then(history => res.json(history));
});

// @route   POST api/workout
// @desc    Post workout to workouts list
// @access  Private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    WorkoutHistory.findOne({user: req.user.id})
        .then(history => {
            if (history) {
                console.log('workout exists')
                // update workouts history
                const newWorkoutHistory = {
                    name: req.body.name
                }

                history.workout.unshift(newWorkoutHistory);
    
                history.save().then(history => res.json(history));
            } else {
                console.log('first workout')
                // first saved workout
                const newWorkoutHistory = new WorkoutHistory({
                    user: req.user.id,
                    workout: [{name: req.body.name}]
                });

                newWorkoutHistory.save().then(history => res.json(history));
            }
        });
});

module.exports = router;