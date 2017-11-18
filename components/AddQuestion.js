import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import { red, orange, blue, lightPurp, pink, white } from './../utils/colors'

const Form = t.form.Form;

const Question = t.struct({
  question: t.String,
  answer: t.String,
  
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
    question :{
      error: 'Please add a question'
    },
    answer :{
        error: 'Please add an answer for the question'
      },
   
  },
  stylesheet: formStyles,
};


export default class AddQuestion extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={Question} 
          options={options}
        />
        <Button
          title="Add new question to the deck"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: white,
  },
});
