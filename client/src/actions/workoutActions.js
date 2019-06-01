import axios from 'axios';

import { SAVE_WORKOUT, GET_WORKOUTS, UPDATE_CURRENT_WORKOUT } from './types';

// Save workout
export const saveWorkout = workoutData => dispatch => {
    axios.post('api/workout', workoutData)
        .then(res => 
            dispatch({
                type: SAVE_WORKOUT
            })
        )
        .catch(err => console.log(err) );
}

// Get workouts history
export const getWorkouts = () => dispatch => {
    axios.get('/api/workout')
        .then(res =>
            dispatch({
                type: GET_WORKOUTS,
                payload: res.data.workouts
            })    
        )
        .catch(err => console.log(err));
}

// Update current workout info
export const updateCurrentWorkout = workoutData => {
    return {
        type: UPDATE_CURRENT_WORKOUT,
        payload: workoutData
    }
}
