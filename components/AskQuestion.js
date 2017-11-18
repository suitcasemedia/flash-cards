import React , {Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {purple,lightPurp,white, gray, red} from '../utils/colors'
import FlipCard from 'react-native-flip-card'


class AskQuestion extends Component {

    render(){
        const {navigation} = this.props
        return(
       
            
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={{alignSelf:'flex-start', marginTop:100,marginLeft:20}} >1/10</Text>
                <Text style={{textAlign: 'center'}} >You got 100%</Text>
                <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('DeckList')}>
                    <Text style={{color:white,  textAlign: 'center',}} >Back to list of decks</Text>
                </TouchableOpacity>
                <FlipCard  perspective={1000} style={styles.FlipCard}>
               
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text style={[styles.question,{textAlign: 'center'}]}>Whats green and smells?</Text>
                        <Text style={[styles.flipText,{textAlign: 'center'}]} >Answer</Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.back}>
                        <View >
                            <Text style={styles.question}>Kermits bum!</Text>
                            <Text style={[styles.flipText,{textAlign: 'center'}]}>Question</Text>
                            <TouchableOpacity style={styles.correctBtn} onPress={() => navigation.navigate('AddQuestion')}>
                                <Text style={{color:white,fontSize:30,  textAlign: 'center',}} >Correct</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.incorrectBtn} onPress={() => navigation.navigate('AskQuestion')}>
                                <Text style={{color:white,fontSize:30, textAlign: 'center',}} >Incorrect </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </FlipCard>
                
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
      fontSize: 50,

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
export default AskQuestion