import axios from 'axios';

import { SAVE_WORKOUT, GET_WORKOUTS, UPDATE_CURRENT_WORKOUT } from './types';

// Save workout
export const saveWorkout = workoutData => dispatch => {
    // Check for workout name, if empty use workout date as name
    // TODO: move to separate function and clean up
    workoutData.name = workoutData.name || `${workoutData.date.getYear() + 1900}-${workoutData.date.getMonth() + 1}-${workoutData.date.getDate()}`; 

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
