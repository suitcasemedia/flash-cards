import { createStore} from 'redux'
//import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducers'


  

export default function configureStore() {
  return createStore(
  reducer,
 // devToolsEnhancer(),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}


