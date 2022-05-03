import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import CourseList from './CourseList'


class CoursesPage extends React.Component {

    componentDidMount() { // componentDidMount is a lifecycle method that is called after the component is rendered for the first time
        const { courses, authors, actions } = this.props
        if (courses.length === 0) {
            actions.loadCourses()
                .catch(error => {
                    alert('Loading courses failed' + error);
                })
        }

        if (authors.length === 0) {
            actions.loadAuthors()
                .catch(error => {
                    alert('Loading authors failed' + error);
                })
        }
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses} />
            </>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

//determine which state we want to pass to the component
function mapStateToProps(state) {
    //expose just the data we need
    return {
        courses:
            state.authors.length === 0 // if there are no authors, don't show the courses
                ?
                []
                :
                state.courses.map(course => {
                    return {
                        ...course,
                        //find the author with the same id as the course
                        authorName: state.authors.find(author => author.id === course.authorId).name
                    }
                }),
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // dispatch is a function that takes an action  and dispatches it to the reducer
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    }
}



//connect returns a function that takes a component as an argument
//by defaul it will dispatch actions 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)