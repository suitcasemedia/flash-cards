import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollViewStyle, ScrollView,AsyncStorage} from 'react-native';
import{styles} from '../styles/styles'
import { Constants } from 'expo';
import Deck from './Deck'
import { StackNavigator } from 'react-navigation'
import {fetchDecks} from '../actions'
import{connect} from 'react-redux'
import _ from 'lodash'
import Spinner from 'react-native-loading-spinner-overlay';
/* 
import {getDecks} from '../utils/api'
import { AsyncStorage } from 'react-native'
*/
function DeckItem({title,navigation, noOfCards}){
  return(
    <View style={styles.deck}  >
        <Text   style={styles.deckTitle}  onPress={()=> navigation.navigate(
          'Deck',
          {deckTitle: title, noOfCards}  
          )} >{title}</Text>
        <Text  style={styles.noOfCards} >Number of cards: {noOfCards}</Text> 
    </View>
        )
}
class DeckList extends Component {

  
  componentDidMount(){


  //AsyncStorage.clear()


   this.props.fetchDecks()
  }


  renderItem=({item})=>{
    return <DeckItem    {...item} navigation={this.props.navigation}/>

  }
  render() {
    const{navigation,deckTitles,decks}= this.props
    if( !decks.length && decks[0] == null ){
      return(
        <View>
          <Text>
            There are currently no decks of cards. Please add one to get started
          </Text>
        </View>
      )
    }
   else if( decks[0] == null ){
      return(
        <View>
       
        <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
     
       
      </View>
      )
    }
      
       return(
        
        <View >
        <FlatList
        
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.title}
        />
         
       
        </View>
    )
   

    }
   
  }


function MapDispatchToProps(dispatch){
  return{
    fetchDecks : ()=> dispatch(fetchDecks())
  }
}
function MapStateToProps(state){
  //console.log("state in mapStateToProps", state)
  return {
    deckTitles: _.map(state.decks.decks, deck =>  deck.title),
    decks  : _.map(state.decks.decks, deck => ({ "title": deck.title, "noOfCards": deck.questions.length }) ),
  }


}
      
export default connect(MapStateToProps, MapDispatchToProps)(DeckList)

