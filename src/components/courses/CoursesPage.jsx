import PropTypes, { func } from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as courseActions from '../../redux/actions/courseActions'


class CoursesPage extends React.Component {

    state = {
        course: {
            title: ""
        }
    }


    handleChange = (event) => {
        const course = { ...this.state.course, title: event.target.value }
        this.setState({ course })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        /*  without mapDispatchToProps, 
            connect will adds dispatch as a prop to the component
            actions must be called with dispatch
            actions creators just return an action
        */
        this.props.actions.createCourse(this.state.course)
        console.log(this.state.course.title)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" value={this.state.course.title} onChange={this.handleChange} />
                <input type="submit" value="Add Course" />
                {this.props.courses.map(course => <div key={course.title}>{course.title}</div>)}
            </form>
        )
    }
}

CoursesPage.propTypes = { //
    courses: PropTypes.array.isRequired, // 
    actions: PropTypes.object.isRequired
}

//deternmine which state we want to pass to the component
function mapStateToProps(state) {
    //expose just the data we need
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // dispatch is a function that takes an action  and dispatches it to the reducer
        actions: bindActionCreators(courseActions, dispatch)
    }
}



//connect returns a function that takes a component as an argument
//by defaul it will dispatch actions 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)