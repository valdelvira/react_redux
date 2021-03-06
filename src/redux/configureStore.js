import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
    // add support for redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    // createStore takes a reducer as an argument
    return createStore(
        rootReducer,
        initialState,
        // redux-immutable-state-invariant is a middleware that checks if the state is immutable
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    )
}
