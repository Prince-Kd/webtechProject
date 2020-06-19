import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import CoverScreen from './screens/CoverScreen';
import Verification from './screens/Verification';
import Info from './screens/GenInfo';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  const client = new ApolloClient({
    uri: 'https://signalc.herokuapp.com/GraphQL'
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}> 
            <Stack.Navigator>
              <Stack.Screen name="Cover" component ={CoverScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Verify" component ={Verification} options={{ headerShown: false }} />
              <Stack.Screen name="Info" component ={Info} options={{ headerShown: false }} />
              <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
