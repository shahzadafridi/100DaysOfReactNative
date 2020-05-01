import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../src/screens/login';
// import Profile from '../src/screens/profile';
import Home from '../src/screens/HomeScreen';
// import Listing from '../src/screens/listing';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Listing' component={Listing} />
      {/* <Stack.Screen name='Login' component={Login} /> */}
      {/* <Stack.Screen name='Profile' component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator