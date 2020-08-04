import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './pages/Loading';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ headerShown: false }} 
          initialRouteName="Loading"
        >
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="NewEntry" component={NewEntry} />
            <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;