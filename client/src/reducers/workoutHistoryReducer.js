import { GET_WORKOUTS } from '../actions/types';

const initialState = {
    workouts: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_WORKOUTS:
            return {
                ...state,
                workouts: action.payload,
                loading: false
            }
        default:
            return state;
    }
}