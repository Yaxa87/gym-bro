import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import workoutHistoryReducer from './workoutHistoryReducer';
import currentWorkoutReducer from './currentWorkoutReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    workoutHistory: workoutHistoryReducer,
    currentWorkout: currentWorkoutReducer
});