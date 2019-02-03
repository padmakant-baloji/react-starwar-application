import { combineReducers } from 'redux';
import session from "./session"
import planets from './planets'

const reducers = {
    session,
    planets
  };
  
  module.exports = combineReducers(reducers);