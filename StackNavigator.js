import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreens from './screens/Homescreens';
import Pizzascreen from './screens/Pizzascreen';
import Pizza from './screens/Pizza';
import CartScreen from './screens/CartScreen';
import OrderData from './screens/OrderData';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homescreens">
          <Stack.Screen name="Homescreens" component={Homescreens} options={{headerShown:false}}/>
          <Stack.Screen name="Pizzascreen" component={Pizzascreen} options={{headerShown:false}}/>
          <Stack.Screen name="Pizza" component={Pizza} options={{headerShown:false}}/>
          <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
          <Stack.Screen name="OrderData" component={OrderData} options={{headerShown:false}}/>
          <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default StackNavigator