import * as types from '../actions/actionTypes';
import initialState from './initialState'


// state is an array of courses
export default function courseReducer(state = initialState.courses, action) {

    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, { ...action.course }]
        case types.LOAD_COURSES_SUCCESS:
            return action.courses
        default: // return the state if no case matches
            return state
    }
}

