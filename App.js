import * as React from 'react';;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ title: 'NxGen Labs' }} name="Home" component={Home} />
        <Stack.Screen
          options={{ title: 'NxGen Labs', headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ title: 'NxGen Labs', headerShown: false }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;