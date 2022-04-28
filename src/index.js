import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App.jsx'
import './index.css'
import configureStore from './redux/configureStore.js'
// Provider is a component that wraps the app
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore() // create store

render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
    , document.getElementById('app'))