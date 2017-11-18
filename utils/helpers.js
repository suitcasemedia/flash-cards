import React from 'react'
import { View, StyleSheet, AsyncStorage ,Text} from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    padding: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: white,
    fontSize: 20,
    
  }
})

export function getMetricMetaInfo (metric) {
    const info = {
      run: {
        displayName: 'Run',
        max: 50,
        unit: 'miles',
        step: 1,
        type: 'steppers',
        getIcon() {
          return (
            <View style={[styles.titleContainer, {backgroundColor: red}]}>
              <MaterialIcons
                name='directions-run'
                color={white}
                size={35}
              />
            </View>
          )
        }
      },
      bike: {
        displayName: 'Bike',
        max: 100,
        unit: 'miles',
        step: 1,
        type: 'steppers',
        getIcon() {
          return (
            <View style={[styles.titleContainer, {backgroundColor: orange}]}>
              <MaterialCommunityIcons
                name='bike'
                color={white}
                size={32}
              />
            </View>
          )
        }
      },
      swim: {
        displayName: 'Swim',
        max: 9900,
        unit: 'meters',
        step: 100,
        type: 'steppers',
        getIcon() {
          return (
            <View style={[styles.iconContainer, {backgroundColor: blue}]}>
              <MaterialCommunityIcons
                name='swim'
                color={white}
                size={35}
              />
            </View>
          )
        }
      },
      sleep: {
        displayName: 'Sleep',
        max: 24,
        unit: 'hours',
        step: 1,
        type: 'slider',
        getIcon() {
          return (
            <View style={[styles.titleContainer, {backgroundColor: lightPurp}]}>
              <FontAwesome
                name='bed'
                color={white}
                size={30}
              />
            </View>
          )
        }
      },
      eat: {
        displayName: 'Eat',
        max: 10,
        unit: 'rating',
        step: 1,
        type: 'slider',
        getIcon() {
          return (
            <View style={[styles.titleContainer, {backgroundColor: pink}]}>
              <MaterialCommunityIcons
                name='food'
                color={white}
                size={35}
              />
            </View>
          )
        }
      },
    }
  
    return typeof metric === 'undefined'
      ? info
      : info[metric]
  }
  
  
export function getFlashCardsInfo (deck) {
    const info = {
        React: {
            title: 'React',
            questions: [
              {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
              },
              {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
              }
            ],
            getTitle() {
                return (
                    <View style={[styles.titleContainer, {backgroundColor: lightPurp}]}>
                    <Text style={[styles.title]}>
                        The title is React
                    </Text>
                  </View>
                )
              }
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
              {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
              }
            ],
            getTitle() {
                return (
                    <View style={[styles.titleContainer, {backgroundColor: pink}]}>
                    <Text  style={[styles.title]}>
                        The title is JavaScript
                    </Text>
                  </View>
                )
              }
        }
    }
    return typeof deck === 'undefined'
    ? info
    : info[deck]
}




    



  