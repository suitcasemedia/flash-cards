import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollViewStyle, ScrollView} from 'react-native';
import { Constants } from 'expo';
import Deck from './Deck'
import { StackNavigator } from 'react-navigation'
import {getDecks} from '../utils/api'
import { AsyncStorage } from 'react-native'

function DeckItem({title,noOfCards,navigation}){
  return(
    <View style={styles.deck} key={title} >
     
        <Text  style={styles.deckTitle}  onPress={()=> navigation.navigate(
          'Deck',
          {deckTitle: 'Zaras Deck'}
          
          )} >{title}</Text>
       
        <Text  style={styles.noOfCards} >Number of cards: {noOfCards}</Text>
      
    </View>
        )
}
export default class DeckList extends Component {

  
  componentDidMount(){
   // AsyncStorage.clear()
    getDecks() 
    .then((decks)=>{
      let deckList = decks
      console.log("the decks are",deckList)  
      }
    )
  }


  renderItem=({item})=>{
    return <DeckItem{...item} navigation={this.props.navigation}/>

  }
  render() {
    const{navigation} = this.props
    const list = [{title:'deck title 1', noOfCards: 50 , key: 1},
                  {title:'deck title 2', noOfCards: 70 , key: 2} 
                ]
           
    return(
      <View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
      

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
