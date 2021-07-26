import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { login } from '../styles';

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('../assets/images/gradient.png')} />
            <Image style={styles.logo} source={require('../assets/images/logo2.png')} />
            <View style={styles.card}>
                <View style={styles.cardBg}></View>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.field}>Username</Text>
                <TextInput style={styles.input} placeholder='Enter your username here' />
                <Text style={styles.field}>Password</Text>
                <TextInput style={styles.input} placeholder='Enter your password here' />
                <TouchableOpacity>
                    <View style={styles.bt}>
                        <Text style={styles.btText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.notRegistered}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => {
                    console.log('on click register');
                    navigation.navigate('Register')
                }}>
                    <Text style={styles.btReg}>Register</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create(login);


