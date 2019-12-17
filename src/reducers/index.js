import { combineReducers } from 'redux';
import todos from './todos';
import search_str from './search';

export default combineReducers({
  todos,
  search_str
})
