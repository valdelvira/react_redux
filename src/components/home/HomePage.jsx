import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => (
    <div className="jumbotron">
        <h1>Home</h1>
        <p>
            This app uses React, Redux, React Router and a variety of other helpful libraries.
        </p>
        <Link to='about' className="btn btn-primary btn-lg">
            About
        </Link>
    </div>
)


export default HomePage