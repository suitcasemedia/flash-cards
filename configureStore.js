import { createStore, applyMiddleware, composea} from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import reducer from './reducers'
import thunk from 'redux-thunk';

  

export default function configureStore() {
  return createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
  
  )}


