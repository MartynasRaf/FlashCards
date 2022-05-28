import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyGroupsScreen from './src/screens/MyGroupsScreen';
import AllGroupsScreen from './src/screens/AllGroupsScreen';
import CardCreatorScreen from './src/screens/CardCreatorScreen';
import FlashSwiperScreen from './src/screens/FlashSwipeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const GroupsFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyGroups"
        component={MyGroupsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AllGroups"
        component={AllGroupsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const NavFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroupFlow"
        component={GroupsFlow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FlashSwipe"
        component={FlashSwiperScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardCreator"
        component={CardCreatorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <NavFlow />
    </NavigationContainer>
  );
};

export default App;
