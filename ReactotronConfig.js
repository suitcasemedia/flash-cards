import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
  } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
  
    Reactotron
      .configure({
        name: 'Flashcards mobile app'
      })
      .use(trackGlobalErrors())
      .use(openInEditor())
      .use(overlay())
      .use(asyncStorage())
      .use(networking())
     .use(reactotronRedux()) //  <- here i am!
      .connect()



