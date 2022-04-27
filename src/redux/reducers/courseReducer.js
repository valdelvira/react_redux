// state is an array of courses
export default function courseReducer(state = [], action) {

    switch (action.type) {
        case 'CREATE_COURSE_SUCCESS':
            return [...state, { ...action.course }]
        case 'LOAD_COURSES_SUCCESS':
            return action.courses
        default: // return the state if no case matches
            return state
    }
}