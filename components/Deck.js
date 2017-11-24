import React , {Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import {purple,lightPurp,white, gray} from '../utils/colors'
import {connect} from 'react-redux'
import _ from 'lodash'


function StartQuizButton(props){
    const{isVisible , navigation, title} = props
    if(isVisible){
        return(
            <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('Quiz', {title})}>
                <Text style={{color:white,fontSize:30}} >Start quiz</Text>
            </TouchableOpacity>
    
        )

    }
    else 
        return(
            <Text></Text>
        )
    
}

class Deck extends Component {
    static navigationOptions = ({ navigation}) =>{
        const {deckTitle} = navigation.state.params
        return{
            title: deckTitle
        }

    }
    render(){
        const {navigation} = this.props
        const {noOfCards,title} = this.props


        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
                    <Text style={{fontSize: 40, textAlign:'center'}}>
                       {title}
                    </Text>
               
                    <Text style={{fontSize: 40, color: gray}}>
                        {noOfCards} cards
                    </Text>
                    <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('AddCard', {title} )}>
                        <Text style={{color:white,fontSize:30}} >Add a card</Text>
                    </TouchableOpacity>
                    <StartQuizButton isVisible={noOfCards > 0}  navigation={navigation} title={title}/>

                  
                    
                </View>
            </View>
        )
    }


}



  function mapStateToProps({decks}, ownProps){
    const {deckTitle} = ownProps.navigation.state.params
    const deck = _.filter(decks.decks , (obj)=>{
        return obj.title == deckTitle
    })
    const{questions, title} = deck[0]
    return{
       title,
      noOfCards :questions.length
    }
  }
export default connect(mapStateToProps)(Deck)