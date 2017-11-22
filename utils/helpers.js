import React from 'react'
import { View, StyleSheet, AsyncStorage ,Text} from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'
import{Notifications, Permissions} from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

  
export function clearLocalNotifications(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync)

}

export function createNotification(){
  return{
    title: '👋 Time to do a quiz',
    body:"👋 don't forget to do your flash cards quiz today!",
    ios:{
      sound: true
    },
    android:{
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }

  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status})=>{
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()
              
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1 )
              tomorrow.setHours(16)
              tomorrow.setMinutes(52)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',

                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
            }
          })
      }
    })

}



  