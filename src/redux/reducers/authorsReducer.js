import * as types from '../actions/actionTypes'
import initialState from './initialState'

// state is an array of courses
export default function authorsReducer(state = initialState.authors, action) {

    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors
        default: // return the state if no case matches
            return state
    }
}

