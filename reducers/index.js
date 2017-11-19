import { combineReducers } from 'redux';
import decksReducer from './reducer_decks' ; 


const rootReducer = combineReducers({
  decks: decksReducer,
  
});

export default rootReducer;

