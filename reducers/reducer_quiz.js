
import {SET_UP_QUIZ_QUESTIONS,PROCESS_ANSWER} from '../actions'
import _ from 'lodash'


function quizReducer(
    state={
    quizComplete: false,
    questions:[],
    totalQuestions: 0,
    totalScore: 0,
    currentNthCard:0}
    ,action){

    switch(action.type){
        
        case SET_UP_QUIZ_QUESTIONS:{
            const totalQuestions = action.questions.length
            const currentQuestionsArrayLength = action.questions.length
            return {
                ...state, 
                    "questions":action.questions, 
                    totalQuestions,
                    currentQuestionsArrayLength,
                    currentNthCard:1,
                    quizComplete: false,
                    totalScore: 0,

            }

        }

        case PROCESS_ANSWER:{

            const {quizComplete,
                questions,
                totalQuestions,
                totalScore,
                currentNthCard,
                currentQuestionsArrayLength} = state
                
            const{answer} = action
            const newTotalScore = totalScore + answer    
            const newCurrentQuestionsArrayLength = --currentQuestionsArrayLength    
            const newCurrentNthCard =  ++currentNthCard
            const newQuestions = questions.slice(1,currentQuestionsArrayLength + 1)

            if(currentNthCard -1 == totalQuestions  ){
                return{
                    ...state,
                        quizComplete: true,
                        totalScore: newTotalScore,
                        currentNthCard :0,

                }
            }
           
            return{
                ...state,
                    currentNthCard:newCurrentNthCard,
                    totalScore: newTotalScore,
                    questions: newQuestions,
                    currentQuestionsArrayLength : newCurrentQuestionsArrayLength
            }

        }
       
        default:{
            return state
        }

    }
}

export default quizReducer