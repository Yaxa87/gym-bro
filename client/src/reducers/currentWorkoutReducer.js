import { SAVE_WORKOUT, UPDATE_CURRENT_WORKOUT } from '../actions/types'

const initialState = {
    saved: false,
    name: '',
    date: new Date(),
    excercises: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_WORKOUT:
            return {
                ...state,
                saved: true
            }
        case UPDATE_CURRENT_WORKOUT:
            return {
                ...state,
                name: action.payload.name,
                excercises: action.payload.excercises
            }
        default:
            return state;
    }
}