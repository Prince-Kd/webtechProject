import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/HomeScreen';
import Report from '../screens/ReportScreen';
import Vitals from '../screens/VitalsScreen';
import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen';
import MakeReport from '../screens/makeReportScreen';
import Notification from '../screens/Notification';
import logVitals from '../screens/logVitals';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';


const HomeStack = createStackNavigator();
const ReportStack = createStackNavigator();
const VitalsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator >
      <BottomTab.Screen
        name="Home"
        options={{
          header: null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: '#ccc',
          keyboardHidesTabBar: true,
        }}
      >{() => (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <HomeStack.Screen name="Profile" component={Profile} />
          <HomeStack.Screen name="Notification" component={Notification} />

        </HomeStack.Navigator>
        )
      }
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Report"
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper-plane-outline' : 'md-paper-plane'} />,
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: '#ccc',
          keyboardHidesTabBar: true,
        }}
      >{() => (
        <ReportStack.Navigator>
          <ReportStack.Screen name="Report" component={Report} options={{ headerShown: false }} />
          <ReportStack.Screen name="Profile" component={Profile} />
          <ReportStack.Screen name="MakeReport" component={MakeReport} />
          <ReportStack.Screen name="Notification" component={Notification} />
        </ReportStack.Navigator>
      )
    }
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Vitals"
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'} />,
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: '#ccc',
          keyboardHidesTabBar: true,
        }}
      >{() => (
        <VitalsStack.Navigator>
          <VitalsStack.Screen name="Vitals" component={Vitals} options={{ headerShown: false }} />
          <VitalsStack.Screen name="logVitals" component={logVitals} />
          <VitalsStack.Screen name="Profile" component={Profile} />
          <VitalsStack.Screen name="Notification" component={Notification} />
        </VitalsStack.Navigator>
      )
    }
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />,
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: '#ccc',
          keyboardHidesTabBar: true,
        }}
      >{() => (
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          <SettingsStack.Screen name="Profile" component={Profile} />
          <SettingsStack.Screen name="Notification" component={Notification} />
        </SettingsStack.Navigator>
      )
    }
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}
