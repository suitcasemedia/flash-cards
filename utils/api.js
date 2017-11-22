import { AsyncStorage } from 'react-native'
import _ from 'lodash'
const CARDS_STORAGE_KEY = '@QUIZCARDS:key'




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

//saveNewDeck: take in a single title argument and add it to the decks. 
export  async function saveNewDeck  ( value) {
    //return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, value)
 // }

  try {
    await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
      [value]: {
        title: value,
        questions: [],
       
    },
    }));
  } catch (error) {
    // Error saving data
    console.log("there is an errot",error)
  }
}


//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck 
export function addCardToDeck(entry, key ) {
  const allCards = getDecks().then((decks)=>{
  //console.log("all cards from the db are:", decks)

 // console.log("the key is:", key)
  const deckToUpdate = _.filter(JSON.parse(decks) , (obj)=>{
      return obj.title == key
   })
 // console.log("deck to update in async is", deckToUpdate)
  const oldQuestions = deckToUpdate[0].questions
 // console.log("the old questions are", oldQuestions)
  const {question, answer} = entry

  
  const newState = { [key]:{"questions":[...oldQuestions,{question, answer}]}}
  console.log("the state is", newState)

  async function addqAndA(newState){
    try{
      await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(newState))
    }
   catch (error) {
    // Error saving data
    console.log("there is an error adding new card",error)
  }
  }
 
  addqAndA(newState)
 
})

}





/*************************************************** */

/* NOT NEED THESE BELOW FOR NOW_ JUST THERE FOR REFERENCE*/


/*************************************************** */


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



  export function removeEntry (key) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
      })
  }