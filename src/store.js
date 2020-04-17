import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {rootReducer} from "./reducers/rootReducer";

const allEnhancers = compose(
    applyMiddleware(thunk, logger)
);

export const store = createStore(
    rootReducer,
    allEnhancers
);