import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';


export const configureStore = (initialState = {}) => createStore(
    reducers,
    initialState,
);
