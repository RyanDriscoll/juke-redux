import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'

const middleware = applyMiddleware(createLogger(), thunkMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
                          lyrics: lyricsReducer,
                          player: playerReducer
                        }), composeEnhancers(middleware));

export default store;
