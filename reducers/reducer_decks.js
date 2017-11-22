
import {RECEIVE_DECKS, ADD_DECK, ADD_CARD} from '../actions'
import _ from 'lodash'


function decksReducer (state={decks: []},action){
    switch(action.type){
        case RECEIVE_DECKS:{
           // console.log("receive decks reducer",action.decks)
            const decks = JSON.parse(action.decks)
            return{      
                ...state,decks
            }
        }
        case ADD_DECK:{
            const {title} = action
            const {decks} = state
            return{
               
                  decks:{...decks,
                    [title]:{"title":title, "questions":[]}
                  }  
            }
        }
        case ADD_CARD :{
            console.log("a new card has been added")
           
            const {entry, key} = action
            console.log("the key is: ", key)
            console.log("the entry is: ", entry)
            const{question, answer} = entry
            const {decks} = state
            const deck =  _.filter(decks, (obj) =>{
                return obj.title == key
            })
            const oldQuestions = deck[0].questions
           // console.log("the old questions are", oldQuestions)
          //  console.log("the deck we have extracted is", deck)
           // const {questions} = deck

            return{
               "decks":{ ...decks,[key]:{"title":key,"questions":[...oldQuestions,{question, answer}]}}
                  
                     
                    
                    
                     
                }  
            
        }
        default:{
            return state
        }

    }
}

export default decksReducer