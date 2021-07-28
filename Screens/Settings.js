import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App({ navigation }) {
    return (
        <View style={s.container}>
            <ScrollView>
                <View style={s.titleContainer}>
                    <Text style={s.pageTitle}>Settings</Text>
                </View>
                <View style={s.userCard}>
                    <Text style={s.loggedInAs}>Logged In As</Text>
                    <View style={s.avatarCont}>
                        <View style={s.avatar}></View>
                        <Text style={s.user}>Ammad Amjad Tarar</Text>
                    </View>
                    <View style={s.kvCont}>
                        <Text style={s.key}>Phone</Text>
                        <Text style={s.val}>+92 315 5988883</Text>
                    </View>
                    <View style={s.kvCont}>
                        <Text style={s.key}>Email</Text>
                        <Text style={s.val}>ammadtarar@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    })
                }}>
                    <View style={s.logout}>
                        <Ionicons size={18} name='log-out-outline' color='red' />
                        <Text style={s.logoutText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingBottom: 10
    },
    pageTitle: {
        fontSize: 30,
        fontWeight: '800'
    },
    userCard: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8
    },
    loggedInAs: {
        color: 'orange',
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase'
    },
    avatarCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 25,
        marginRight: 10
    },
    user: {
        fontSize: 20,
        fontWeight: '600'
    },
    kvCont: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        paddingTop: 10,
        borderTopColor: 'lightgray',
        borderTopWidth: 0.5,
        alignItems: 'center'
    },
    key: {
        fontSize: 10,
        color: 'gray',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginRight: 10,
        width: 50,
        textAlign: 'center'
    },
    val: {
        fontSize: 12,
        color: 'black'
    },
    logout: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 8,
        flexDirection: 'row'
    },
    logoutText: {
        color: 'red',
        fontWeight: '600',
        marginLeft: 4
    }

});
