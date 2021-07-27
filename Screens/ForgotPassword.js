import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from "../Components/Button";
import TextView from '../Components/TextView';

export default function App({ navigation }) {
    return (
        <View style={authStyles.container}>
            <TouchableOpacity style={authStyles.back} onPress={() => {
                navigation.goBack()
            }}>
                {<Ionicons size='30' name='ios-close' color='gray' />}
            </TouchableOpacity>
            <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />
            <Image style={authStyles.logo} source={require('../assets/images/logo2.png')} />
            <View style={authStyles.card}>
                <View style={authStyles.cardBg}></View>
                <Text style={authStyles.login}>Reset Password</Text>

                <Text style={authStyles.info}>
                    Please enter your email address below. We will email you your password
                </Text>
                <TextView title='Email' placeholder='Eneter your email address here' />
                <Button title='Reset' type='big' onPress={() => {
                    console.log('on click reset')
                }}></Button>
            </View>
            <StatusBar style="dark" />
        </View>
    );
}




