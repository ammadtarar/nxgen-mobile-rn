import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Reports from './Reports'
import Appointments from './Appointments'
import RateList from './Ratelist'
import Settings from './Settings'
import Packages from './Packages'
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Reports') {
                            iconName = focused ? 'ios-file-tray-stacked' : 'ios-file-tray-stacked-outline';
                        } else if (route.name === 'Appointments') {
                            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
                        } else if (route.name === 'Rate List') {
                            iconName = focused ? 'md-pricetag' : 'md-pricetag-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        } else if (route.name === 'Packages') {
                            iconName = focused ? 'md-pricetags' : 'md-pricetags-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'orange',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Reports" component={Reports} />
                <Tab.Screen name="Appointments" component={Appointments} />
                <Tab.Screen name="Rate List" component={RateList} />
                <Tab.Screen name="Packages" component={Packages} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}