import { createStore, applyMiddleware, composea} from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

  

export default function configureStore() {
  return createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
  
  )}


