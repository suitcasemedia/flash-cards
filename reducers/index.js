import {RECEIVE_DECKS, ADD_DECK} from '../actions'

function decks(state={  JavaScript: {title: 'JavaScript',questions: [],}},action){
    switch(action.type){
        case RECEIVE_DECKS:{
            return{
                ...state,
                ...action.decks
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

export default decks