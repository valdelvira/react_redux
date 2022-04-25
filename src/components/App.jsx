import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "./home/HomePage.jsx"
import AboutPage from "./about/AboutPage.jsx"
import Header from "./common/Header.jsx"
import PageNotFound from "./PageNotFound.jsx"
import CoursesPage from "./courses/CoursesPage.jsx"


function App() {
    // Switch is used to render only one of the routes at a time.
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default App



