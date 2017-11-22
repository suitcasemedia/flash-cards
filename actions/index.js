import * as flashcardsAPIUtil from '../utils/api'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SET_UP_QUIZ_QUESTIONS = 'SET_UP_QUIZ_QUESTIONS'
export const PROCESS_ANSWER = 'PROCESS_ANSWER'

export function receiveDecks(decks){
    return{
        type: RECEIVE_DECKS,
        decks,
    }
}

export const fetchDecks = () => dispatch => (
    flashcardsAPIUtil
        .getDecks()
        .then(decks => dispatch(receiveDecks(decks)))
  );

export function addDeck(title){
    return{
        type: ADD_DECK,
        title
    }
}

export function addCard(key, entry){
    return{
        type: ADD_CARD,
        key,
        entry,
    }
}

export function setUpQuizQuestions(questions){
    return{
        type: SET_UP_QUIZ_QUESTIONS,
        questions,
    }
}

export function processAnswer(answer){
    return{
        type:PROCESS_ANSWER,
        answer
    }
}