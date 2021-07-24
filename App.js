import * as React from 'react';;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Screens/Home";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ title: 'NxGen Labs' }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;