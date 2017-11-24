import {  StyleSheet } from 'react-native'
import t from 'tcomb-form-native'; // 0.6.9
import {purple,gray ,white,red,orangeblue,lightPurp,pink,blue } from '../utils/colors'
const Form = t.form.Form;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
  });

  export const formStyles = {
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