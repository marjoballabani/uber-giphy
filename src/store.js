import {createStore, combineReducers, applyMiddleware} from 'redux'
import { logger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

import images from './Reducers/imagesReducer'


const reducers = combineReducers({
    images: images
})

const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware))

export default store
