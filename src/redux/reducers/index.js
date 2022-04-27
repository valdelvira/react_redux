import { combineReducers } from "redux"
import courses from "./courseReducer"

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
    courses
})

export default rootReducer