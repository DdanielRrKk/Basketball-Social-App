import React from 'react';
import { Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const NavStack = createStackNavigator();
import LandingScreen from './screens/authScreens/landingScreen';
import SigninScreen from './screens/authScreens/signinScreen';
import SignupScreen from './screens/authScreens/signupScreen';
import MainScreen from './screens/tabNavigation';


import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function App() {
  const [state, setState] = React.useState({loaded: false});

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) setState({loggedIn: true, loaded: true});
      else setState({loggedIn: false, loaded: true});
    });
  });

  if(!state.loaded) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }

  if(!state.loggedIn) {
    return (
      <NavigationContainer>
        <NavStack.Navigator initialRouteName='LandingScreen'>
          <NavStack.Screen name='LandingScreen' component={LandingScreen} options={{ headerMode: 'none' }}/>
          <NavStack.Screen name='SigninScreen' component={SigninScreen} options={{ headerMode: 'none' }}/>
          <NavStack.Screen name='SignupScreen' component={SignupScreen} options={{ headerMode: 'none' }}/>
        </NavStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName='MainScreen'>
        <NavStack.Screen name='MainScreen' component={MainScreen} options={{ headerMode: 'none' }}/>
      </NavStack.Navigator>
    </NavigationContainer>
  );
};
