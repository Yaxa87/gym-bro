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
        .then(history => res.json(history))
        .catch(err => console.log(err));
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

                history.workouts.unshift(newWorkoutHistory);
    
                history.save().then(history => res.json(history)).catch(err => console.log(err));
            } else {
                console.log('first workout')
                // first saved workout
                const newWorkoutHistory = new WorkoutHistory({
                    user: req.user.id,
                    workouts: [{name: req.body.name}]
                });

                newWorkoutHistory.save().then(history => res.json(history)).catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;