import * as React from 'react';;
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ForgotPasword from "./Screens/ForgotPassword";
import BookAppointment from "./Screens/BookAppointment";
import Scanner from "./Screens/Scanner";

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
  },
};


function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <FlashMessage position="bottom" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: '', headerShown: false, headerTitleStyle: { color: 'white' },
            headerStyle: { backgroundColor: 'orange' },
            headerTintColor: 'red'
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: '', headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ title: '', headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ title: '', headerShown: false }}
          name="ForgotPassword"
          component={ForgotPasword}
        />
        <Stack.Screen
          options={{ title: 'Book Appointment', headerShown: true }}
          name="Book"
          component={BookAppointment}
        />
        <Stack.Screen
          options={{ title: 'Scanner', headerShown: true }}
          name="Scanner"
          component={Scanner}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;