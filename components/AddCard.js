import React, { Component } from 'react';
import { View, StyleSheet, Button , Text} from 'react-native';
import {formStyles} from '../styles/styles'
import t from 'tcomb-form-native'; // 0.6.9
import { red, orange, blue, lightPurp, pink, white } from './../utils/colors'
import {addCardToDeck} from './../utils/api'
import { validate } from 'tcomb-validation';
import{addCard} from '../actions'
import {connect} from 'react-redux'


const Form = t.form.Form;

const Question = t.struct({
  question: t.String,
  answer: t.String,
  
});


const options = {
  fields: {
    question :{
      error: 'Please add a question'
    },
    answer :{
        error: 'Please add an answer for the question'
      },
   
  },
  stylesheet: formStyles,
};

class AddCard extends Component {
  static navigationOptions = ({ navigation}) =>{
    const {title} = navigation.state.params
    return{
        title
    }

}
  handleSubmit = () => {
   
    const{navigation} = this.props
    const{navigate} = navigation
    const {title} = navigation.state.params
    
    const value = this._form.getValue();
    //console.log('value: ', value);
    if(value){
      addCardToDeck(value, title)
      this.props.addCard(title, {"question": value.question, "answer": value.answer})
      navigate('Deck',{deckTitle: title})
    }
  }
  
  render() {
    const{navigation} = this.props
    const {navigate} = navigation
    const{title} =navigation.state.params
    return (
      <View style={styles.container}>
        <Text>
          Add a new question and answer to the deck "{title}""
        </Text>
        <Form 
          ref={c => this._form = c}
          type={Question} 
          options={options}
        />
        <Button
          title="Add new question to the deck"
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

    addCard: (entry,key) => dispatch(addCard(entry,key))
  }
}
export default connect(null, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: white,
  },
});
