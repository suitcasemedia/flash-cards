import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import { red, orange, blue, lightPurp, pink, white } from './../utils/colors'
import {saveNewDeck} from './../utils/api'
import {connect} from 'react-redux'
import {addDeck} from './../actions'
import { AsyncStorage } from 'react-native'
const Form = t.form.Form;

const Deck = t.struct({
  deckTitle: t.String,
 
  
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: blue,
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    deckTitle: {
      error: 'Please give the deck a title'
    },
   
     
   
  },
  stylesheet: formStyles,
};


class AddDeck extends Component {
  static navigationOptions = ({ navigation}) =>{
    
    return{
        title:'Add a new deck of cards'
    }
  }
  handleSubmit = () => {
    const{navigation} = this.props
    const{navigate} = navigation
    const value = this._form.getValue();
    console.log( value);

  /*  const key = "@QUIZCARDS:key"
    
    //Save to 'DB'
    
   

    // Error saving data
  */
   if(value){
    saveNewDeck(value.deckTitle)
    .then(this.props.addDeck(value.deckTitle))
    .then(
      navigate(
        'DeckList',
       {DeckList: "List of decks"}  
        )
    )
    this.setState({ value: null });
   } 
    
  }
  
  render() {
    const {navigation} = this.props
    const {navigate} = navigation
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={Deck} 
          options={options}
        />
        <Button
          title="Add new deck"
          onPress={()=>{
            this.handleSubmit()
          }}

        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
      addDeck : (title)=> dispatch(addDeck(title))
  }

}
function mapStateToProps(){

}
export default connect(null,mapDispatchToProps)(AddDeck)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
