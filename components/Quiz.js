import React , {Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {purple,lightPurp,white, gray, red} from '../utils/colors'
import FlipCard from 'react-native-flip-card'
import {connect} from 'react-redux'
import _ from 'lodash'
import { setUpQuizQuestions , processAnswer} from '../actions/index';
import {setLocalNotification,clearLocalNotifications} from './../utils/helpers'

function Score(props) {
    const {isVisible,finalPercentage,navigation} = props;
    if (isVisible) {
      return (<View style={{flex:1}}>
                <Text style={{alignItems:'center', justifyContent:'center',textAlign: 'center'}} >You got {finalPercentage}%</Text>
                <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('DeckList')}>
                    <Text style={{color:white,  textAlign: 'center',}} >Back to list of decks</Text>
                </TouchableOpacity>
             </View>
      )
    }
    else{
        return(
            <Text> </Text>
        ) 
    } 
  }

function QuizPageNumbers(props){
    const{ currentNthCard, totalQuestions, isVisible} = props
    if(isVisible){
        return(
            <Text style={{alignSelf:'flex-start', marginTop:100,marginLeft:20}} > {currentNthCard}/{totalQuestions} </Text>
        )
    }else{
        return(
            <Text></Text>
        )
    } 
}

function FlipContent(props){
    const{isVisible, questionsFromQuizReducer, processAnswer} = props
    if(isVisible){
        return(
            <FlipCard  perspective={1000} style={styles.FlipCard}>
            
                {/* Face Side */}
                <View style={styles.face}>
                    <Text style={[styles.question,{textAlign: 'center'}]}>{ questionsFromQuizReducer[0] ? questionsFromQuizReducer[0].question : ''}</Text>
                    <Text style={[styles.flipText,{textAlign: 'center'}]} >Answer</Text>
                </View>
                {/* Back Side */}
                <View style={styles.back}>
                    <View >
                        <Text style={[styles.question,{textAlign:'center'}]}>{ questionsFromQuizReducer[0] ? questionsFromQuizReducer[0].answer : ''}</Text>

                        <Text style={[styles.flipText,{textAlign: 'center'}]}>Question</Text>

                        <TouchableOpacity style={styles.correctBtn} onPress={() => processAnswer(1)}>
                            <Text style={{color:white,fontSize:30,  textAlign: 'center',}} >Correct</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.incorrectBtn} onPress={() => processAnswer(0)}>
                            <Text style={{color:white,fontSize:30, textAlign: 'center',}} >Incorrect </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </FlipCard>
            
            )
        }
        else{

            return(
                <Text></Text>
            )
        }


}
class Quiz extends Component {

    componentDidMount(){
        clearLocalNotifications()
        .then(setLocalNotification())
 
        const {setUpQuizQuestions, questionsFromCardsReducer} = this.props
       
        if(questionsFromCardsReducer){
            setUpQuizQuestions(questionsFromCardsReducer)
        }
       
      
    }
    
   
    render(){
        const {navigation,
            questionsFromQuizReducer,
            totalQuestions,
            currentNthCard,
            currentScore,
            totalScore,
            quizComplete,
            processAnswer } = this.props
       
      
        return(
       
            
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
               
                <QuizPageNumbers isVisible={!quizComplete}  currentNthCard={currentNthCard} totalQuestions={totalQuestions} />
                <Score  finalPercentage={Math.round((totalScore/ totalQuestions) * 100)} isVisible={quizComplete} navigation={navigation}/>
               <FlipContent isVisible={!quizComplete}  questionsFromQuizReducer={questionsFromQuizReducer} processAnswer={processAnswer} />
                
            </View>
        
        )
    }


}



function mapStateToProps({decks,quiz}, ownProps){
    const {title} = ownProps.navigation.state.params
    const {totalQuestions, 
        totalScore,
        currentNthCard,
        currentScore,
        quizComplete,
        currentQuestionsArrayLength} = quiz

    const deck = _.filter(decks.decks , (obj)=>{
        return obj.title == title
    })
    const{questions} = deck[0]
    return{
        title,
        noOfCards :questions.length,
        questionsFromCardsReducer: questions,
        questionsFromQuizReducer: quiz.questions,
        totalQuestions,
        totalScore,
        currentNthCard,
        currentScore,
        quizComplete,
        currentQuestionsArrayLength
    }
}


const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    androidBtn: {
      margin: 5,
      backgroundColor: purple,
      padding: 10,
      borderRadius: 2,
    },
    iosBtn: {
      backgroundColor: white,
      borderColor: purple,
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      paddingLeft: 25,
      paddingRight: 25,
    },
    FlipCard:{
        borderWidth: 0,
    
    },
    face: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        
     
    },
    back:{
       
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
       
    },
    question:{
      fontSize: 30,

    },
    flipText:{
        fontSize: 15,

    },
    correctBtn:{
        backgroundColor:'green',
        margin: 5,
        padding: 10,
        borderRadius: 2,
        

    },
    incorrectBtn:{
        backgroundColor: red,
        margin: 5,
        padding: 10,
        borderRadius: 2,
       

    },
  })

function mapDispatchToProps(dispatch){
    return{
        setUpQuizQuestions: (questions)=> dispatch(setUpQuizQuestions(questions)),
        processAnswer: (answer)=> dispatch(processAnswer(answer))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz) 