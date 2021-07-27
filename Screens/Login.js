import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { authStyles } from '../styles';
import Button from "../Components/Button";
import TextView from '../Components/TextView';

export default function App({ navigation }) {
    return (
        <View style={authStyles.container}>
            <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />
            <Image style={authStyles.logo} source={require('../assets/images/logo2.png')} />
            <View style={authStyles.card}>
                <View style={authStyles.cardBg}></View>
                <Text style={authStyles.login}>Login</Text>
                <TextView title='Username' placeholder='Enter your username here' />
                <TextView title='Password' placeholder='Enter your password here' />
                <Button type='big' title='Login' onPress={() => {
                    console.log('on click login')
                }} />
                <View style={authStyles.forgotPassword}>
                    <Text style={authStyles.forgotText}>Forget your password ?</Text>
                    <Button type='simple' title='Reset Password' onPress={() => {
                        navigation.navigate('ForgotPassword')
                    }} />
                </View>
            </View>
            <View style={authStyles.notRegistered}>
                <Text style={authStyles.notRegInfo}>Don't have an account ?</Text>
                <Button title='Register' type='small' onPress={() => {
                    navigation.navigate('Register')
                }} />
            </View>
            <StatusBar style="dark" />
        </View>
    );
}




