import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const appointmentsData = [
    {
        id: 0,
        patient: "Ammad Amjad",
        test_name: "Blood Test",
        type: "Home Pickup",
        date: "13 July 2021",
        status: "pending",
    },
    {
        id: 0,
        patient: "Ammad Amjad",
        test_name: "Blood Test",
        type: "Home Pickup",
        date: "13 July 2021",
        status: "completed",
    },
    {
        id: 0,
        patient: "Ammad Amjad",
        test_name: "Blood Test",
        type: "Home Pickup",
        date: "13 July 2021",
        status: "cancelled",
    },
    {
        id: 0,
        patient: "Ammad Amjad",
        test_name: "Blood Test",
        type: "Home Pickup",
        date: "13 July 2021",
        status: "pending",
    },
    {
        id: 0,
        patient: "Ammad Amjad",
        test_name: "Blood Test",
        type: "Home Pickup",
        date: "13 July 2021",
        status: "pending",
    },
];

export default function App({ navigation }) {

    const [appointments, setAppointments] = useState(appointmentsData);

    function getStatusClass(status) {
        var color = ''
        if (status == 'pending') {
            color = 'orange';
        } else if (status == 'completed') {
            color = 'green';
        } else if (status == 'cancelled') {
            color = 'red';
        } else {
            color = 'black';
        }
        return {
            color: color,
            fontWeight: '600'
        };
    }
    const renderItem = ({ item }) => (
        <View style={s.item}>
            <View style={s.top}>
                <Text style={s.itemTitle}>{item.patient}</Text>
                <View style={s.itemDateWrapper}>
                    <Ionicons size={16} name='ios-calendar-sharp' color='black' />
                    <Text style={s.itemDate}>{item.date}</Text>
                </View>
            </View>

            <View style={s.bottom}>
                <View style={s.bottomItem}>
                    <Text style={s.bottomItemTitle}>Status</Text>
                    <Text style={[s.bottomItemValue, getStatusClass(item.status)]}>{item.status}</Text>
                </View>
                <View style={s.hSpacer}></View>
                <View style={s.bottomItem}>
                    <Text style={s.bottomItemTitle}>Test Name</Text>
                    <Text style={s.bottomItemValue}>{item.test_name}</Text>
                </View>
                <View style={s.hSpacer}></View>
                <View style={s.bottomItem}>
                    <Text style={s.bottomItemTitle}>Type</Text>
                    <Text style={s.bottomItemValue}>{item.type}</Text>
                </View>
            </View>


            {
                item.status == 'pending' &&
                <View style={s.itemActions}>
                    <TouchableOpacity>
                        <View style={s.itemAction}>
                            <Ionicons size={18} name='ios-close' color='red' />
                            <Text style={s.itemActionText}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }

        </View >
    );


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={s.container}>

                <View style={s.titleContainer}>
                    <Text style={s.pageTitle}>Appointments</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Book') }}>
                        <View style={s.filterBt}>
                            <Ionicons size={30} name='md-add' color='black' />
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={appointments}
                    renderItem={renderItem}
                    key={item => item.id}
                />

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14
    },
    pageTitle: {
        fontSize: 30,
        fontWeight: '800'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    top: {
        display: 'flex',
        flexDirection: 'row'
    },
    filterBt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        display: 'flex',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemTitle: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600'
    },

    itemDateWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    itemDate: {
        fontSize: 12,
        marginLeft: 4
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomItem: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomItemTitle: {
        color: 'gray',
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlign: 'center'
    },
    bottomItemValue: {
        color: 'black',
        fontSize: 12,
        marginTop: 8,
        textTransform: 'capitalize'
    },
    hSpacer: {
        width: 1,
        height: 20,
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: 'lightgray'
    },
    itemActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        marginTop: 20,
    },
    itemAction: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 0.5,
        borderColor: '#EF5350',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 20
    },
    itemActionText: {
        fontSize: 12,
        color: '#EF5350',
        marginLeft: 4,
        fontWeight: '600',
        marginRight: 4
    }
});
