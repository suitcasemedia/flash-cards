import { combineReducers } from 'redux';
import decksReducer from './reducer_decks' ; 
import quizReducer from './reducer_quiz' ; 


const rootReducer = combineReducers({
  decks: decksReducer,
  quiz: quizReducer

  
});

export default rootReducer;

