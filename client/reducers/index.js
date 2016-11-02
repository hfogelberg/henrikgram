// A reducer edits the state
// A reducer takes in two things:
// 1. The action (info about what happened)
// 2. A copy of the current state
// The reducer eturns copy of the updated store


import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  comments,
  posts,
  routing: routerReducer
});

export default rootReducer;
