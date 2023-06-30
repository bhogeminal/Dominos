import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Homescreens from './screens/Homescreens'
import StackNavigator from './StackNavigator'
import { BasketContext } from './Context'
const App = () => {
  return (
    <BasketContext>
      <StackNavigator/>
    </BasketContext>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});