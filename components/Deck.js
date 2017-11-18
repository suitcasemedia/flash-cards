import React , {Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {purple,lightPurp,white, gray} from '../utils/colors'

class Deck extends Component {
    static navigationOptions = ({ navigation}) =>{
        const {deckTitle} = navigation.state.params
        return{
            title: deckTitle
        }

    }
    render(){
        const {navigation} = this.props
        
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
                    <Text style={{fontSize: 40, textAlign:'center'}}>
                        Hello Zara you are brilliant
                    </Text>
               
                    <Text style={{fontSize: 40, color: gray}}>
                        3 cards
                    </Text>
                    <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('AddQuestion')}>
                        <Text style={{color:white,fontSize:30}} >Add a card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.androidBtn} onPress={() => navigation.navigate('AskQuestion')}>
                        <Text style={{color:white,fontSize:30}} >Start quiz</Text>
                    </TouchableOpacity>
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
export default Deck