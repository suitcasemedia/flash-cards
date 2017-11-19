
import {RECEIVE_DECKS, ADD_DECK} from '../actions'

function decksReducer (state={decks: []},action){
    switch(action.type){
        case RECEIVE_DECKS:{
            console.log("receive decks reducer",action.decks)
            const decks = JSON.parse(action.decks)
            return{
                ...state,
                ["decks"]:[decks] 
            }
        }
        case ADD_DECK:{

            return{
                ...state,
                ...action.title

            }
        }
        default:{
            return state
        }

    }
}

export default decksReducer