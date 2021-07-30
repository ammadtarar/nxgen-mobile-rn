import * as React from 'react';
import { View, Text, Platform, NativeModules, StyleSheet, TouchableOpacity } from 'react-native';
const { StatusBarManager } = NativeModules;

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Reports from './Reports'
import Appointments from './Appointments'
import EmptyScreen from './EmptyScreen'
import Settings from './Settings'
import RateAndPackages from './RateAndPackages'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scanStyle: { bottom: 0 }
        }
    }
    componentDidMount() {
        this.getStatusBarHeight()
    }

    getStatusBarHeight() {
        if (Platform.OS == 'android') {
            this.setState({
                scanStyle: {
                    bottom: StatusBarManager.HEIGHT + 10
                }
            })
            console.log('Android State');
            console.log(this.state);
        } else {
            StatusBarManager.getHeight((h) => {
                if (h.height <= 20) {
                    this.setState({
                        scanStyle: {
                            bottom: 0
                        }
                    });
                } else {
                    this.setState({
                        scanStyle: {
                            bottom: h.height - 14
                        }
                    });
                }
                console.log(this.state);
            })
        }
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Reports') {
                                iconName = focused ? 'ios-file-tray-stacked' : 'ios-file-tray-stacked-outline';
                            } else if (route.name === 'Appointments') {
                                iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
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
                    <Tab.Screen
                        name=" "
                        component={EmptyScreen}
                        listeners={{
                            tabPress: e => {
                                e.preventDefault();
                            },
                        }}
                    />
                    <Tab.Screen name="Packages" component={RateAndPackages} />
                    <Tab.Screen name="Settings" component={Settings} listeners={{}} />
                </Tab.Navigator>

                <TouchableOpacity>
                    <View style={[s.btScanWrapper, this.state.scanStyle]}>
                        <View style={s.btScan}>
                            <Ionicons name='ios-qr-code' size={20} color='black' />
                            <Text style={s.btScanText}>Scan</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }


}

const s = StyleSheet.create({
    btScanWrapper: {
        width: '20%',
        height: 70,
        position: 'absolute',
        left: '50%',
        transform: [
            { translateX: '-32%' }
        ],

        alignItems: 'center'
    },
    btScan: {
        width: 65,
        height: 65,
        backgroundColor: 'orange',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowRadius: 10
    },
    btScanText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 4,
    }
})