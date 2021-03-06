
import React ,{Component}from 'react'
import { Platform,StatusBar, StyleSheet, Text, View } from 'react-native'
import{styles} from './styles/styles'
import { Constants } from 'expo'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons ,Entypo} from '@expo/vector-icons'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import configureStore from './configureStore'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import './ReactotronConfig'





function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30} color={tintColor} />
    }
  }, 
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})
const Stack = StackNavigator({
  DeckList:{
    screen: Tabs
  },
  Deck:{
    screen: Deck
  },
  AddCard:{
    screen: AddCard
  },
  Quiz:{
    screen: Quiz
  }
})




const store = configureStore()

class App extends Component {



  render() { 
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Stack/>
        </View>
      </Provider>
    );
  }
}

export default App
