import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollViewStyle, ScrollView} from 'react-native';
import { Constants } from 'expo';
import Deck from './Deck'
import { StackNavigator } from 'react-navigation'
import {fetchDecks} from '../actions'
import{connect} from 'react-redux'
import _ from 'lodash'

/* 
import {getDecks} from '../utils/api'
import { AsyncStorage } from 'react-native'
*/
function DeckItem({title,navigation}){
  return(
    <View style={styles.deck} key={title} >
     
        <Text  style={styles.deckTitle}  onPress={()=> navigation.navigate(
          'Deck',
          {deckTitle: 'Zaras Deck'}
          
          )} >{title}</Text>
       
        <Text  style={styles.noOfCards} >Number of cards:10</Text>
      
    </View>
        )
}
class DeckList extends Component {

  
  componentDidMount(){
   // AsyncStorage.clear()
  /*  getDecks() 
    .then((decks)=>{
      let deckList = decks
      console.log("the decks are",deckList)  
      }
    )
    */

   this.props.fetchDecks()
  }


  renderItem=({item})=>{
    return <DeckItem {...item} navigation={this.props.navigation}/>

  }
  render() {
    const{navigation,deckTitles,decks}= this.props
     return deckTitles.map(title => {
   
       return(
        <View>
          <DeckItem
            title={title}
            navigation={navigation}
          />
        </View>
    )})
   

    }
   
  }


function MapDispatchToProps(dispatch){
  return{
    fetchDecks : ()=> dispatch(fetchDecks())
  }
}
function MapStateToProps(state){
  console.log("state in mapStateToProps", state)
  return {
    deckTitles: _.map(state.decks.decks, deck =>  deck.title),
    decks  : state.decks
  }


}
      
export default connect(MapStateToProps, MapDispatchToProps)(DeckList)
const styles = StyleSheet.create({
  deckListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    flexDirection: 'row'
  },
  deck:{
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    padding: 30
  },
  deckTitle: {
    padding: 8,
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  
  },
  noOfCards: {
    padding: 8,
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  
  },
  
});
