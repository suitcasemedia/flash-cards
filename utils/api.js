import { AsyncStorage } from 'react-native'
const CARDS_STORAGE_KEY = '@QUIZCARDS:key'


export function removeEntry (key) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
    })
}

//getDecks: return all of the decks along with their titles, questions, and answers. 
export function getDecks() {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
   // .then(formatResults)
  }
function formatResults (results) {
  return results === null
    ? "nothing here"
    : results
}
//getDeck: take in a single id argument and return the deck associated with that id. 
export function getDeck () {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
      .then(formatResults)
  }
//saveDeckTitle: take in a single title argument and add it to the decks. 
export  async function saveNewDeck  ( value) {
    //return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, value)
 // }

  try {
    await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
      [value]: {
        title: value,
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ],
       
    },
    }));
  } catch (error) {
    // Error saving data
    console.log("there is an errot",error)
  }
}
//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck 
export function addCardToDeck({ entry, key }) {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
      [key]: entry
    }))
  }

  //delete card
  export function removeCard (key) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
      })
  }
  // delete deck

  export function removeDeck(key) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
      })
  }