import React , {Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
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

        console.log("the title from props is ", title)
        console.log("number of cards from props is ", noOfCards)
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
    metricCounter: {
      width: 85,
      justifyContent: 'center',
      alignItems: 'center'
    },
  })

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