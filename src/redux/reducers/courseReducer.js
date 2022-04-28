import * as types from '../actions/actionTypes';

// state is an array of courses
export default function courseReducer(state = [], action) {

    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, { ...action.course }]
        case 'LOAD_COURSES':
            return action.courses
        default: // return the state if no case matches
            return state
    }
}