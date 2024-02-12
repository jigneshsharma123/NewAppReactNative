import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import ArticleDetailScreen from './Components/ArticleDetailScreen';
import LandingPage from './Components/LandingPage';

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    // Wrap the entire application with NativeBaseProvider for theme and UI components
    <NativeBaseProvider>
      {/* Navigation container for managing navigation state */}
      <NavigationContainer>
        {/* Stack navigator for screen navigation */}
        <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
          {/* Screen for landing page */}
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }} // Hide header for this screen
          />
          {/* Screen for home screen */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Screen for article detail */}
          <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
