import { combineReducers } from 'redux'
import courses from './courseReducer'
import authors from './authorsReducer'

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
    courses,
    authors
})

export default rootReducer